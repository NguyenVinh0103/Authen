import { useSelector } from "react-redux";

export function useTheme() {
    const theme = useSelector(state => state?.util?.theme)
    return theme;
}