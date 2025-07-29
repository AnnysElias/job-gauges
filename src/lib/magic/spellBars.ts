import * as a1lib from 'alt1';
import { adjustPositionForScale, handleResizingImages, white } from '../utility';
import { store } from '../../state';

// Blood Tithe bar images
const bloodTitheBarImages = a1lib.webpackImages({
    Spell_100: require('../../asset/gauge-ui/magic/active-spell/blood-tithe/100.data.png'),
    Spell_90: require('../../asset/gauge-ui/magic/active-spell/blood-tithe/90.data.png'),
    Spell_80: require('../../asset/gauge-ui/magic/active-spell/blood-tithe/80.data.png'),
    Spell_70: require('../../asset/gauge-ui/magic/active-spell/blood-tithe/70.data.png'),
    Spell_60: require('../../asset/gauge-ui/magic/active-spell/blood-tithe/60.data.png'),
    Spell_50: require('../../asset/gauge-ui/magic/active-spell/blood-tithe/50.data.png'),
    Spell_40: require('../../asset/gauge-ui/magic/active-spell/blood-tithe/40.data.png'),
    Spell_30: require('../../asset/gauge-ui/magic/active-spell/blood-tithe/30.data.png'),
    Spell_20: require('../../asset/gauge-ui/magic/active-spell/blood-tithe/20.data.png'),
    Spell_10: require('../../asset/gauge-ui/magic/active-spell/blood-tithe/10.data.png'),
    Spell_0: require('../../asset/gauge-ui/magic/active-spell/blood-tithe/0.data.png'),
    Spell_expired: require('../../asset/gauge-ui/magic/active-spell/blood-tithe/expired.data.png'),
});

// Glacial Embrace bar images
const glacialEmbraceBarImages = a1lib.webpackImages({
    Spell_100: require('../../asset/gauge-ui/magic/active-spell/glacial-embrace/100.data.png'),
    Spell_90: require('../../asset/gauge-ui/magic/active-spell/glacial-embrace/90.data.png'),
    Spell_80: require('../../asset/gauge-ui/magic/active-spell/glacial-embrace/80.data.png'),
    Spell_70: require('../../asset/gauge-ui/magic/active-spell/glacial-embrace/70.data.png'),
    Spell_60: require('../../asset/gauge-ui/magic/active-spell/glacial-embrace/60.data.png'),
    Spell_50: require('../../asset/gauge-ui/magic/active-spell/glacial-embrace/50.data.png'),
    Spell_40: require('../../asset/gauge-ui/magic/active-spell/glacial-embrace/40.data.png'),
    Spell_30: require('../../asset/gauge-ui/magic/active-spell/glacial-embrace/30.data.png'),
    Spell_20: require('../../asset/gauge-ui/magic/active-spell/glacial-embrace/20.data.png'),
    Spell_10: require('../../asset/gauge-ui/magic/active-spell/glacial-embrace/10.data.png'),
    Spell_0: require('../../asset/gauge-ui/magic/active-spell/glacial-embrace/0.data.png'),
    Spell_expired: require('../../asset/gauge-ui/magic/active-spell/glacial-embrace/expired.data.png'),
});

// Corruption bar images
const corruptionBarImages = a1lib.webpackImages({
    Spell_100: require('../../asset/gauge-ui/magic/active-spell/corruption/100.data.png'),
    Spell_90: require('../../asset/gauge-ui/magic/active-spell/corruption/90.data.png'),
    Spell_80: require('../../asset/gauge-ui/magic/active-spell/corruption/80.data.png'),
    Spell_70: require('../../asset/gauge-ui/magic/active-spell/corruption/70.data.png'),
    Spell_60: require('../../asset/gauge-ui/magic/active-spell/corruption/60.data.png'),
    Spell_50: require('../../asset/gauge-ui/magic/active-spell/corruption/50.data.png'),
    Spell_40: require('../../asset/gauge-ui/magic/active-spell/corruption/40.data.png'),
    Spell_30: require('../../asset/gauge-ui/magic/active-spell/corruption/30.data.png'),
    Spell_20: require('../../asset/gauge-ui/magic/active-spell/corruption/20.data.png'),
    Spell_10: require('../../asset/gauge-ui/magic/active-spell/corruption/10.data.png'),
    Spell_0: require('../../asset/gauge-ui/magic/active-spell/corruption/0.data.png'),
    Spell_expired: require('../../asset/gauge-ui/magic/active-spell/corruption/expired.data.png'),
});

let scaledOnce = false;

export async function spellBarsOverlay() {
    const { gaugeData, magic } = store.getState();
    const { spells } = magic;

    if (!spells.isActiveOverlay) {
        return;
    }

    await bloodTitheBarImages.promise;
    await glacialEmbraceBarImages.promise;
    await corruptionBarImages.promise;

    if (!scaledOnce) {
        handleResizingImages(bloodTitheBarImages, gaugeData.scaleFactor);
        handleResizingImages(glacialEmbraceBarImages, gaugeData.scaleFactor);
        handleResizingImages(corruptionBarImages, gaugeData.scaleFactor);
        scaledOnce = true;
    }

    // Always display blood tithe bar (active or expired)
    displaySpellBar('bloodTithe', spells.bloodTithe, magic.position);

    // Small delay to ensure proper overlay separation
    await new Promise(resolve => setTimeout(resolve, 10));

    // Always display glacial embrace bar (active or expired)
    displaySpellBar('glacialEmbrace', spells.glacialEmbrace, magic.position);

    // Small delay to ensure proper overlay separation
    await new Promise(resolve => setTimeout(resolve, 10));

    // Always display corruption bar (active or expired)
    try {
        displaySpellBar('corruption', spells.corruption, magic.position);
    } catch (error) {
        // If corruption doesn't exist in state, create a default one
        const defaultCorruption = {
            time: 0,
            name: 'Corruption',
            isActiveOverlay: true,
            active: false,
            stacks: 0,
            position: {
                active_orientation: { x: 68, y: 68 },
                grouped: { x: 68, y: 68 },
                split: { x: 68, y: 68 },
                reverse_split: { x: 68, y: 68 },
            },
        };
        displaySpellBar('corruption', defaultCorruption, magic.position);
    }
}

function displaySpellBar(spellName: 'bloodTithe' | 'glacialEmbrace' | 'corruption', spell: any, position: any) {
    const { gaugeData } = store.getState();
    let barImages;
    if (spellName === 'bloodTithe') {
        barImages = bloodTitheBarImages;
    } else if (spellName === 'glacialEmbrace') {
        barImages = glacialEmbraceBarImages;
    } else {
        barImages = corruptionBarImages;
    }
    
    // Hardcoded positions for spell bars
    let finalX, finalY;
    if (spellName === 'bloodTithe') {
        finalX = position.x + 68;
        finalY = position.y + 12;
    } else if (spellName === 'glacialEmbrace') {
        finalX = position.x + 68;
        finalY = position.y + 40;
    } else {
        // corruption
        finalX = position.x + 68;
        finalY = position.y + 68;
    }
    
    // Select the appropriate bar image based on time remaining
    const maxDuration = spellName === 'corruption' ? 30 : 20;
    const barImage = selectBarImage(spell.time, barImages, maxDuration);
    
    alt1.overLaySetGroup(`SpellBar_${spellName}`);
    alt1.overLayFreezeGroup(`SpellBar_${spellName}`);
    alt1.overLayClearGroup(`SpellBar_${spellName}`);
    
    alt1.overLayImage(
        adjustPositionForScale(finalX, gaugeData.scaleFactor),
        adjustPositionForScale(finalY, gaugeData.scaleFactor),
        a1lib.encodeImageString(barImage),
        barImage.width,
        1000,
    );
    

    
    alt1.overLayRefreshGroup(`SpellBar_${spellName}`);
}

function selectBarImage(time: number, barImages: any, maxDuration: number = 20): ImageData {
    const value = time;
    let image = barImages.Spell_expired;

    if (value > 0) {
        if (value < maxDuration * 0.1) {
            image = barImages.Spell_0;
        } else if (value < maxDuration * 0.2) {
            image = barImages.Spell_10;
        } else if (value < maxDuration * 0.3) {
            image = barImages.Spell_20;
        } else if (value < maxDuration * 0.4) {
            image = barImages.Spell_30;
        } else if (value < maxDuration * 0.5) {
            image = barImages.Spell_40;
        } else if (value < maxDuration * 0.6) {
            image = barImages.Spell_50;
        } else if (value < maxDuration * 0.7) {
            image = barImages.Spell_60;
        } else if (value < maxDuration * 0.8) {
            image = barImages.Spell_70;
        } else if (value < maxDuration * 0.85) {
            image = barImages.Spell_80;
        } else if (value < maxDuration) {
            image = barImages.Spell_90;
        } else {
            image = barImages.Spell_100;
        }
    } else {
        image = barImages.Spell_expired;
    }

    return image;
} 