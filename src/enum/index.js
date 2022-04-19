import { normalize, normalizeHorizontal } from "../helper";

export const INPUT_HEIGHT = normalize(50)

export const MARGIN = normalize(4);
export const MARGIN_MEDIUM = normalize(8)
export const MARGIN_LARGE = normalize(12)
export const MARGIN_X_LARGE = normalize(16);
export const MARGIN_X_X_LARGE = normalize(20);
export const MARGIN_X_X_X_LARGE = normalize(24);

export const MARGIN_HORIZONTAL = normalizeHorizontal(4);
export const MARGIN_MEDIUM_HORIZONTAL = normalizeHorizontal(8)
export const MARGIN_LARGE_HORIZONTAL = normalizeHorizontal(12)
export const MARGIN_X_LARGE_HORIZONTAL = normalizeHorizontal(16);
export const MARGIN_X_X_LARGE_HORIZONTAL = normalizeHorizontal(20);
export const MARGIN_X_X_X_LARGE_HORIZONTAL = normalizeHorizontal(24);
export const MODE = {
    LIGHT: false,
    DARK: true
}
