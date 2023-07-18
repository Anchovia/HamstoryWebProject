// module import
import { useMemo } from "react";

export default function useAnimatedVisibility(position, start, end) {
    return useMemo(() => {
        return position >= start && position <= end;
    }, [position, start, end]);
}