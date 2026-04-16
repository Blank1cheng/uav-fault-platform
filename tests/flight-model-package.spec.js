import { describe, expect, it } from 'vitest';
import evtolReferencePackage from '../public/model-packages/evtol_small_nonlinear.json';
import {
  buildFlightModelPackage,
  validateFlightModelPackage
} from '../src/services/flightModelPackageService.js';
import {
  createSimulationBlockPythonBinding
} from '../src/composables/useWorkbenchState.js';
import {
  createWorkbenchSnapshot,
  restoreWorkbenchSnapshot
} from '../src/services/workbenchSnapshotService.js';

const VALID_PACKAGE = {
  schemaVersion: 1,
  packageType: 'flight-control-model',
  modelId: 'attitude-controller',
  modelName: 'Attitude Controller',
  description: 'Control package for the attitude loop',
  source: {
    origin: 'workbench',
    slxFile: 'eVTOL_Small_nonandlin_algorithm_validation.slx',
    notesDoc: 'Controller handoff notes'
  },
  pythonModules: [
    {
      moduleId: 'attitude_pid',
      fileName: 'attitude_pid.py',
      entryFunction: 'process',
      category: 'control',
      source: 'def process(error, dt):\n  return error',
      parsedInterface: {
        fileName: 'attitude_pid.py',
        moduleName: 'attitude_pid',
        entryFunction: 'process'
      }
    }
  ],
  faultLibrary: [],
  workbenchSnapshot: {
    version: 1,
    modelNodes: [],
    modelEdges: [],
    nodeSeq: 0,
    edgeSeq: 0,
    activeLineType: 'normal',
    faultedBlks: [],
    importedFaultModels: []
  }
};

describe('flightModelPackageService', () => {
  it('validates a well-formed flight model package and rejects malformed packages', () => {
    const valid = validateFlightModelPackage(VALID_PACKAGE);
    const invalid = validateFlightModelPackage({
      ...VALID_PACKAGE,
      schemaVersion: 2,
      pythonModules: [{ fileName: 'missing-module-id.py', source: '' }]
    });
    const malformedSnapshot = validateFlightModelPackage({
      ...VALID_PACKAGE,
      workbenchSnapshot: { version: 1 }
    });

    expect(valid).toEqual({ ok: true, errors: [] });
    expect(invalid.ok).toBe(false);
    expect(invalid.errors.length).toBeGreaterThan(0);
    expect(malformedSnapshot.ok).toBe(false);
  });

  it('rejects malformed snapshot arrays that contain non-objects', () => {
    const result = validateFlightModelPackage({
      ...VALID_PACKAGE,
      workbenchSnapshot: {
        ...VALID_PACKAGE.workbenchSnapshot,
        modelNodes: [null],
        modelEdges: [null]
      }
    });

    expect(result.ok).toBe(false);
    expect(result.errors).toContain('workbenchSnapshot.modelNodes[0] must be an object.');
    expect(result.errors).toContain('workbenchSnapshot.modelEdges[0] must be an object.');
  });

  it('rejects whitespace-only module fields and missing entry functions', () => {
    const result = validateFlightModelPackage({
      ...VALID_PACKAGE,
      pythonModules: [
        {
          moduleId: '   ',
          fileName: '  ',
          source: ' ',
          category: 'control',
          parsedInterface: {
            fileName: 'attitude_pid.py',
            moduleName: 'attitude_pid'
          }
        },
        {
          moduleId: 'attitude_pid',
          fileName: 'attitude_pid.py',
          source: 'def process(error, dt):\n  return error',
          category: 'control',
          parsedInterface: {
            fileName: 'attitude_pid.py',
            moduleName: 'attitude_pid'
          }
        }
      ]
    });

    expect(result.ok).toBe(false);
    expect(result.errors).toContain('pythonModules[0].moduleId is required.');
    expect(result.errors).toContain('pythonModules[0].fileName is required.');
    expect(result.errors).toContain('pythonModules[0].source is required.');
    expect(result.errors).toContain('pythonModules[0].entryFunction is required.');
    expect(result.errors).toContain('pythonModules[1].entryFunction is required.');
  });

  it('preserves the default execution endpoint when restoring a partial binding config', () => {
    const restored = restoreWorkbenchSnapshot({
      modelNodes: [
        {
          id: 'node-1',
          type: 'simulation_block',
          pythonBinding: {
            bound: true,
            executionConfig: {
              timeoutMs: 5000
            }
          }
        }
      ],
      modelEdges: []
    });

    expect(restored.modelNodes[0].pythonBinding.executionConfig).toMatchObject({
      endpoint: 'http://127.0.0.1:8765/api/python-flow/execute',
      timeoutMs: 5000
    });
  });

  it('restores and creates snapshots defensively when node and edge collections are invalid', () => {
    const restored = restoreWorkbenchSnapshot({
      modelNodes: null,
      modelEdges: null,
      faultedBlks: null,
      importedFaultModels: null
    });

    const createdSnapshot = createWorkbenchSnapshot({
      modelNodes: null,
      modelEdges: null,
      faultedBlks: null,
      importedFaultModels: null
    });

    const packageData = buildFlightModelPackage({
      meta: {
        modelId: 'attitude-controller',
        modelName: 'Attitude Controller',
        description: 'Control package for the attitude loop',
        source: {
          origin: 'workbench',
          slxFile: 'eVTOL_Small_nonandlin_algorithm_validation.slx',
          notesDoc: 'Controller handoff notes'
        }
      },
      snapshot: {
        version: 1,
        modelNodes: null,
        modelEdges: null,
        nodeSeq: 2,
        edgeSeq: 1,
        activeLineType: 'normal',
        faultedBlks: [],
        importedFaultModels: []
      },
      faultLibrary: []
    });

    expect(restored.modelNodes).toEqual([]);
    expect(restored.modelEdges).toEqual([]);
    expect(createdSnapshot).toEqual(expect.objectContaining({
      modelNodes: [],
      modelEdges: [],
      nodeSeq: 0,
      edgeSeq: 0
    }));

    expect(packageData.pythonModules).toEqual([]);
    expect(packageData.workbenchSnapshot.modelNodes).toEqual([]);
  });

  it('builds a flight model package with embedded python modules from bound simulation blocks', () => {
    const packageData = buildFlightModelPackage({
      meta: {
        modelId: 'attitude-controller',
        modelName: 'Attitude Controller',
        description: 'Control package for the attitude loop',
        source: {
          origin: 'workbench',
          slxFile: 'eVTOL_Small_nonandlin_algorithm_validation.slx',
          notesDoc: 'Controller handoff notes'
        }
      },
      snapshot: {
        version: 1,
        modelNodes: [
          {
            id: 'node-1',
            type: 'simulation_block',
            pythonBinding: {
              bound: true,
              moduleId: 'attitude_pid',
              moduleName: 'attitude_pid',
              fileName: 'attitude_pid.py',
              entryFunction: 'process',
              description: 'PID loop',
              rawSource: 'def process(error, dt):\n  return error',
              parsedInterface: {
                fileName: 'attitude_pid.py',
                moduleName: 'attitude_pid',
                entryFunction: 'process'
              },
              portMapping: {
                inputs: [],
                outputs: [],
                middleVars: []
              }
            }
          }
        ],
        modelEdges: [],
        nodeSeq: 1,
        edgeSeq: 0,
        activeLineType: 'normal',
        faultedBlks: [],
        importedFaultModels: []
      },
      faultLibrary: []
    });

    expect(packageData.schemaVersion).toBe(1);
    expect(packageData.packageType).toBe('flight-control-model');
    expect(packageData.pythonModules).toHaveLength(1);
    expect(packageData.pythonModules[0]).toMatchObject({
      moduleId: 'attitude_pid',
      fileName: 'attitude_pid.py',
      entryFunction: 'process'
    });
    expect(packageData.workbenchSnapshot.modelNodes).toHaveLength(1);
  });

  it('exports a single pythonModules entry when multiple simulation blocks bind to the same module', () => {
    const binding = createSimulationBlockPythonBinding({
      fileName: 'attitude_pid.py',
      moduleName: 'attitude_pid',
      description: 'PID loop',
      entryFunction: 'process',
      rawSource: 'def process(error, dt):\n  return error',
      inputs: [],
      outputs: []
    }, {
      moduleCategory: 'controllers',
      sourcePackageId: 'evtol-small-nonlinear',
      sourcePackageName: 'eVTOL Small Nonlinear Flight Control'
    });

    const packageData = buildFlightModelPackage({
      meta: {
        modelId: 'attitude-controller',
        modelName: 'Attitude Controller',
        description: 'Control package for the attitude loop',
        source: {
          origin: 'workbench',
          slxFile: 'eVTOL_Small_nonandlin_algorithm_validation.slx',
          notesDoc: 'Controller handoff notes'
        }
      },
      snapshot: {
        version: 1,
        modelNodes: [
          {
            id: 'node-1',
            type: 'simulation_block',
            pythonBinding: binding
          },
          {
            id: 'node-2',
            type: 'simulation_block',
            pythonBinding: {
              ...binding,
              description: 'Duplicate binding for the same module'
            }
          }
        ],
        modelEdges: [],
        nodeSeq: 2,
        edgeSeq: 0,
        activeLineType: 'normal',
        faultedBlks: [],
        importedFaultModels: []
      },
      faultLibrary: []
    });

    expect(packageData.pythonModules).toHaveLength(1);
    expect(packageData.pythonModules[0]).toMatchObject({
      moduleId: 'attitude_pid',
      fileName: 'attitude_pid.py',
      entryFunction: 'process',
      category: 'controllers',
      sourcePackageId: 'evtol-small-nonlinear',
      sourcePackageName: 'eVTOL Small Nonlinear Flight Control'
    });
  });

  it('deep clones exported workbenchSnapshot.modelEdges so edits do not mutate the input snapshot', () => {
    const sourceSnapshot = {
      version: 1,
      modelNodes: [],
      modelEdges: [
        {
          id: 'edge-1',
          lineType: 'normal',
          sourceNodeId: 'node-source',
          targetNodeId: 'node-target',
          sourcePortIndex: 0,
          targetPortIndex: 0,
          sourcePort: {
            index: 0,
            varName: 'out',
            displayName: 'Output',
            type: 'float'
          },
          targetPort: {
            index: 0,
            varName: 'in',
            displayName: 'Input',
            type: 'float'
          }
        }
      ],
      nodeSeq: 0,
      edgeSeq: 1,
      activeLineType: 'normal',
      faultedBlks: [],
      importedFaultModels: []
    };

    const packageData = buildFlightModelPackage({
      meta: {
        modelId: 'attitude-controller',
        modelName: 'Attitude Controller',
        description: 'Control package for the attitude loop',
        source: {
          origin: 'workbench',
          slxFile: 'eVTOL_Small_nonandlin_algorithm_validation.slx',
          notesDoc: 'Controller handoff notes'
        }
      },
      snapshot: sourceSnapshot,
      faultLibrary: []
    });

    packageData.workbenchSnapshot.modelEdges[0].targetPort.displayName = 'Edited Input';

    expect(packageData.workbenchSnapshot.modelEdges).not.toBe(sourceSnapshot.modelEdges);
    expect(packageData.workbenchSnapshot.modelEdges[0]).not.toBe(sourceSnapshot.modelEdges[0]);
    expect(sourceSnapshot.modelEdges[0].targetPort.displayName).toBe('Input');
    expect(packageData.workbenchSnapshot.modelEdges[0].targetPort.displayName).toBe('Edited Input');
  });

  it('infers moduleId for UI-created python bindings when exporting a flight model package', () => {
    const parsedInterface = {
      fileName: 'attitude_pid.py',
      entryFunction: 'process',
      description: 'PID loop',
      rawSource: 'def process(error, dt):\n  return error',
      inputs: [
        {
          name: 'error',
          type: 'float'
        }
      ],
      outputs: [
        {
          name: 'control',
          type: 'float'
        }
      ]
    };
    const binding = createSimulationBlockPythonBinding(parsedInterface);
    const packageData = buildFlightModelPackage({
      meta: {
        modelId: 'attitude-controller',
        modelName: 'Attitude Controller',
        description: 'Control package for the attitude loop',
        source: {
          origin: 'workbench',
          slxFile: 'eVTOL_Small_nonandlin_algorithm_validation.slx',
          notesDoc: 'Controller handoff notes'
        }
      },
      snapshot: {
        version: 1,
        modelNodes: [
          {
            id: 'node-1',
            type: 'simulation_block',
            pythonBinding: binding
          }
        ],
        modelEdges: [],
        nodeSeq: 1,
        edgeSeq: 0,
        activeLineType: 'normal',
        faultedBlks: [],
        importedFaultModels: []
      },
      faultLibrary: []
    });

    expect(binding.moduleId).toBe('attitude_pid');
    expect(packageData.pythonModules).toHaveLength(1);
    expect(packageData.pythonModules[0]).toMatchObject({
      moduleId: 'attitude_pid',
      fileName: 'attitude_pid.py',
      entryFunction: 'process'
    });
    expect(packageData.workbenchSnapshot.modelNodes[0].pythonBinding).toMatchObject({
      bound: true,
      moduleId: 'attitude_pid',
      fileName: 'attitude_pid.py',
      entryFunction: 'process'
    });
  });

  it('preserves package-aware python binding metadata through the factory and package export', () => {
    const parsedInterface = {
      fileName: 'attitude_pid.py',
      moduleName: 'attitude_pid',
      description: 'PID loop',
      entryFunction: 'process',
      rawSource: 'def process(error, dt):\n  return error',
      inputs: [
        {
          name: 'error',
          type: 'float'
        }
      ],
      outputs: [
        {
          name: 'control',
          type: 'float'
        }
      ]
    };
    const binding = createSimulationBlockPythonBinding(parsedInterface, {
      moduleCategory: 'controllers',
      sourcePackageId: 'evtol-small-nonlinear',
      sourcePackageName: 'eVTOL Small Nonlinear Flight Control'
    });
    const packageData = buildFlightModelPackage({
      meta: {
        modelId: 'attitude-controller',
        modelName: 'Attitude Controller',
        description: 'Control package for the attitude loop',
        source: {
          origin: 'workbench',
          slxFile: 'eVTOL_Small_nonandlin_algorithm_validation.slx',
          notesDoc: 'Controller handoff notes'
        }
      },
      snapshot: {
        version: 1,
        modelNodes: [
          {
            id: 'node-1',
            type: 'simulation_block',
            pythonBinding: binding
          }
        ],
        modelEdges: [],
        nodeSeq: 1,
        edgeSeq: 0,
        activeLineType: 'normal',
        faultedBlks: [],
        importedFaultModels: []
      },
      faultLibrary: []
    });

    expect(binding).toMatchObject({
      bound: true,
      moduleId: 'attitude_pid',
      moduleCategory: 'controllers',
      sourcePackageId: 'evtol-small-nonlinear',
      sourcePackageName: 'eVTOL Small Nonlinear Flight Control',
      executionMode: 'mock'
    });
    expect(packageData.workbenchSnapshot.modelNodes[0].pythonBinding).toMatchObject({
      bound: true,
      moduleId: 'attitude_pid',
      moduleCategory: 'controllers',
      sourcePackageId: 'evtol-small-nonlinear',
      sourcePackageName: 'eVTOL Small Nonlinear Flight Control'
    });
    expect(packageData.pythonModules[0]).toMatchObject({
      moduleId: 'attitude_pid',
      category: 'controllers',
      sourcePackageId: 'evtol-small-nonlinear',
      sourcePackageName: 'eVTOL Small Nonlinear Flight Control'
    });
  });

  it('skips incomplete bound simulation blocks when exporting python modules', () => {
    const packageData = buildFlightModelPackage({
      meta: {
        modelId: 'attitude-controller',
        modelName: 'Attitude Controller',
        description: 'Control package for the attitude loop',
        source: {
          origin: 'workbench',
          slxFile: 'eVTOL_Small_nonandlin_algorithm_validation.slx',
          notesDoc: 'Controller handoff notes'
        }
      },
      snapshot: {
        version: 1,
        modelNodes: [
          {
            id: 'node-1',
            type: 'simulation_block',
            pythonBinding: {
              bound: true,
              moduleId: 'attitude_pid',
              fileName: 'attitude_pid.py',
              entryFunction: 'process',
              rawSource: 'def process(error, dt):\n  return error'
            }
          },
          {
            id: 'node-2',
            type: 'simulation_block',
            pythonBinding: {
              bound: true,
              moduleId: 'broken_module',
              fileName: 'broken_module.py',
              entryFunction: '',
              rawSource: 'def process(error):\n  return error'
            }
          }
        ],
        modelEdges: [],
        nodeSeq: 2,
        edgeSeq: 0,
        activeLineType: 'normal',
        faultedBlks: [],
        importedFaultModels: []
      },
      faultLibrary: []
    });

    expect(packageData.pythonModules).toHaveLength(1);
    expect(packageData.pythonModules[0].moduleId).toBe('attitude_pid');
    expect(packageData.workbenchSnapshot.modelNodes[1].pythonBinding).toBeNull();
  });

  it('ships a reusable eVTOL reference package', () => {
    const validation = validateFlightModelPackage(evtolReferencePackage);

    expect(validation).toEqual({ ok: true, errors: [] });
    expect(evtolReferencePackage.pythonModules.map((item) => item.moduleId)).toEqual([
      'imu_gyro',
      'imu_accel',
      'barometer',
      'gps_velocity',
      'attitude_pid',
      'control_allocation',
      'motor_model',
      'vehicle_dynamics'
    ]);
    expect(evtolReferencePackage.faultLibrary.length).toBeGreaterThanOrEqual(5);
    expect(evtolReferencePackage.workbenchSnapshot.modelNodes.length).toBeGreaterThanOrEqual(8);
  });

  it('keeps the reference package compatible with the current local runtime', () => {
    const scopeEdges = evtolReferencePackage.workbenchSnapshot.modelEdges
      .filter((edge) => edge.targetNodeId === 'node-12');
    const signalSources = evtolReferencePackage.workbenchSnapshot.modelNodes
      .filter((node) => node.type === 'signal_source');
    const gpsModule = evtolReferencePackage.pythonModules
      .find((item) => item.moduleId === 'gps_velocity');
    const motorModule = evtolReferencePackage.pythonModules
      .find((item) => item.moduleId === 'motor_model');
    const motorLockFault = evtolReferencePackage.faultLibrary
      .find((item) => item.id === 'motor_lock');
    const gpsFreezeFault = evtolReferencePackage.faultLibrary
      .find((item) => item.id === 'gps_freeze');

    expect(scopeEdges).toHaveLength(2);
    expect(signalSources).toEqual(expect.arrayContaining([
      expect.objectContaining({
        props: expect.objectContaining({
          name: 'Attitude Error',
          waveType: '常值',
          amplitude: '0.6',
          frequency: '1.0',
          outputFormat: '标量'
        })
      }),
      expect.objectContaining({
        props: expect.objectContaining({
          name: 'True Velocity',
          waveType: '正弦',
          amplitude: '1.2',
          frequency: '0.25',
          outputFormat: '标量'
        })
      }),
      expect.objectContaining({
        props: expect.objectContaining({
          name: 'Held Velocity Sample',
          waveType: '常值',
          amplitude: '1.2',
          frequency: '1.0',
          outputFormat: '标量'
        })
      })
    ]));
    expect(gpsModule?.parsedInterface?.inputs.map((item) => item.name)).toEqual([
      'true_velocity',
      'held_velocity',
      'freeze'
    ]);
    expect(gpsModule?.parsedInterface?.description).toBe('GPS velocity channel with held-sample freeze approximation');
    expect(evtolReferencePackage.workbenchSnapshot.modelEdges).toEqual(expect.arrayContaining([
      expect.objectContaining({
        targetNodeId: 'node-6',
        targetPortIndex: 1
      })
    ]));
    expect(motorModule?.parsedInterface?.inputs.map((item) => item.name)).toEqual([
      'left_cmd',
      'right_cmd',
      'efficiency',
      'left_lock',
      'saturation'
    ]);
    expect(motorLockFault).toMatchObject({
      parameter: 'left_lock',
      defaultValue: 1.0
    });
    expect(gpsFreezeFault).toMatchObject({
      id: 'gps_freeze',
      name: 'GPS Freeze Approximation (Held Sample)',
      parameter: 'freeze',
      defaultValue: 1.0,
      description: 'Simplified reference-package fault that switches GPS velocity output to a predefined held sample instead of latching the live previous sample.'
    });
  });
});
