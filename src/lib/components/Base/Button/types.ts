import { Colors } from "$lib/types/Colors";

export enum ButtonSize {
    XS = 'btn-xs',
    SM = 'btn-sm',
    MD = 'btn-md',
    LG = 'btn-lg',
}

export enum ButtonVariant {
    NEUTRAL = `btn-${Colors.NEUTRAL}`,
    PRIMARY = `btn-${Colors.PRIMARY}`,
    SECONDARY = `btn-${Colors.SECONDARY}`,
    ACCENT = `btn-${Colors.ACCENT}`,
    GHOST = 'btn-ghost',
    LINK = 'btn-link',
}