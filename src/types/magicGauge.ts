import { Position, Ability, StackingTimedPlayerBuff } from './common';

export enum ActiveSpells {
    Exsanguinate = 1,
    Incite_Fear = 2,
    Ice_Barrage = 3,
}

export type ActiveSpellNames = keyof typeof ActiveSpells;

export type Spells = {
    isActiveOverlay: boolean;
    activeSpell: number;
    bloodTithe: StackingTimedPlayerBuff;
    glacialEmbrace: StackingTimedPlayerBuff;
    corruption: StackingTimedPlayerBuff;
};

export type MagicGauge = {
    isInCombat: boolean;
    position: Position;
    spells: Spells;
    soulfire: Ability;
    instability: Ability;
    tsunami: Ability;
    sunshine: Ability;
};
