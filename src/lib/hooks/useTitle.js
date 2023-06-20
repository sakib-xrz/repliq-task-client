import { useEffect } from "react";

const useTitle = (title) => {
    useEffect(() => {
        document.title = `${title} - Food Chemistry`;
    }, [title]);
};
export default useTitle;
