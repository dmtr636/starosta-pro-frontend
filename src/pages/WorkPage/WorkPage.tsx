import { useParams } from "react-router-dom";
import { store } from "@/stores/store.ts";
import { observer } from "mobx-react-lite";

export const WorkPage = observer(() => {
    const params = useParams<{ id: string }>();
    let work;
    if (params.id) {
        work = store.getWorkById(params.id);
    }

    if (!work) {
        return <div>Загрузка...</div>;
    }

    return <div>{work.name}</div>;
});
