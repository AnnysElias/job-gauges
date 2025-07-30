import { MagicGauge } from '../types';

export const magic_gauge: MagicGauge = {
    isInCombat: false,
    position: {
        x: 0,
        y: 0,
    },
    spells: {
        isActiveOverlay: true,
        activeSpell: 0,
        bloodTithe: {
            time: 20,
            name: 'Incite_Fear',
            isActiveOverlay: true,
            active: true,
            stacks: 0,
            position: {
                active_orientation: {
                    x: 68,
                    y: 12,
                },
                grouped: {
                    x: 68,
                    y: 12,
                },
                split: {
                    x: 68,
                    y: 12,
                },
                reverse_split: {
                    x: 68,
                    y: 12,
                },
            },
        },
        glacialEmbrace: {
            time: 20,
            name: 'Incite_Fear',
            isActiveOverlay: true,
            active: true,
            stacks: 0,
            position: {
                active_orientation: {
                    x: 68,
                    y: 60,
                },
                grouped: {
                    x: 68,
                    y: 60,
                },
                split: {
                    x: 68,
                    y: 60,
                },
                reverse_split: {
                    x: 68,
                    y: 60,
                },
            },
        },
        corruption: {
            time: 20,
            name: 'Corruption',
            isActiveOverlay: true,
            active: true,
            stacks: 0,
            position: {
                active_orientation: {
                    x: 68,
                    y: 108,
                },
                grouped: {
                    x: 68,
                    y: 108,
                },
                split: {
                    x: 68,
                    y: 108,
                },
                reverse_split: {
                    x: 68,
                    y: 108,
                },
            },
        },
    },
    instability: {
        isActiveOverlay: false,
        active: false,
        time: 0,
        isOnCooldown: false,
        cooldownDuration: 0,
        position: {
            active_orientation: {
                x: 30,
                y: 5,
            },
            grouped: {
                x: 30,
                y: 5,
            },
            split: {
                x: 30,
                y: 5,
            },
            reverse_split: {
                x: 30,
                y: 5,
            },
        },
    },
    soulfire: {
        isActiveOverlay: false,
        active: false,
        time: 0,
        isOnCooldown: false,
        cooldownDuration: 0,
        position: {
            active_orientation: {
                x: -3,
                y: 5,
            },
            grouped: {
                x: -3,
                y: 5,
            },
            split: {
                x: -3,
                y: 5,
            },
            reverse_split: {
                x: -3,
                y: 5,
            },
        },
    },
    tsunami: {
        isActiveOverlay: false,
        active: false,
        time: 0,
        isOnCooldown: false,
        cooldownDuration: 0,
        position: {
            active_orientation: {
                x: 55,
                y: 45,
            },
            grouped: {
                x: 55,
                y: 45,
            },
            split: {
                x: 55,
                y: 45,
            },
            reverse_split: {
                x: 55,
                y: 45,
            },
        },
    },
    sunshine: {
        isActiveOverlay: false,
        active: false,
        time: 0,
        isOnCooldown: false,
        cooldownDuration: 0,
        position: {
            active_orientation: {
                x: 10,
                y: 45,
            },
            grouped: {
                x: 10,
                y: 45,
            },
            split: {
                x: 10,
                y: 45,
            },
            reverse_split: {
                x: 10,
                y: 45,
            },
        },
    },
};
