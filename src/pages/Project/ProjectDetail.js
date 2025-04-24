import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import { useParams } from "react-router-dom";
const ProjectDetail = () => {
    const { projectId } = useParams();
    return (_jsx("div", { className: "p-4", children: _jsxs("h1", { className: "text-xl font-bold", children: ["\uD504\uB85C\uC81D\uD2B8 \uC0C1\uC138: ", projectId] }) }));
};
export default ProjectDetail;
