// module import
import { useMemo } from "react";

export default function useAnimatedVisibility(position :number, start :number, end :number) :boolean{
    return useMemo(() => {
        return position >= start && position <= end;
    }, [position, start, end]);
}