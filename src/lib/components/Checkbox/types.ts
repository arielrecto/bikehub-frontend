import { Colors } from "$lib/types/Colors";

export enum CheckboxSize {
    XS = 'checkbox-xs',
    SM = 'checkbox-sm',
    MD = 'checkbox-md',
    LG = 'checkbox-lg',
}

export enum CheckboxVariant {
    NEUTRAL = `checkbox-${Colors.NEUTRAL}`,
    PRIMARY = `checkbox-${Colors.PRIMARY}`,
    SECONDARY = `checkbox-${Colors.SECONDARY}`,
    ACCENT = `checkbox-${Colors.ACCENT}`,
    SUCCESS = `checkbox-${Colors.SUCCESS}`,
    WARNING = `checkbox-${Colors.WARNING}`,
    INFO = `checkbox-${Colors.INFO}`,
    ERROR = `checkbox-${Colors.ERROR}`,
}