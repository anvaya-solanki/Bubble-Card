import {
    changeStatus,
    changeButton,
    changeName,
    changeIcon,
    changeState,
    changeSlider,
    changeStyle
} from './changes.ts'
import { getButtonType } from './helpers.ts';
import {
    createCustomStructure,
    createSliderStructure,
    createStateStructure,
    createStructure,
    createSwitchStructure
} from './create.ts';

export function handleButton(context) {
    const buttonType = getButtonType(context);
    if (context.cardType !== `button-${buttonType}`) {
        createStructure(context);

        if (buttonType ==='switch') {
            createSwitchStructure(context);
        } else if (buttonType === 'slider') {
            createSliderStructure(context);
        } else if (buttonType ==='state') {
            createStateStructure(context);
        } else if (buttonType ==='custom') {
            createCustomStructure(context);
        }
    }

    changeStatus(context);
    changeButton(context);
    changeName(context);
    changeIcon(context);
    changeState(context);
    changeSlider(context);
    changeStyle(context);
}
