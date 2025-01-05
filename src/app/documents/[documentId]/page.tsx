import { FC } from "react";
import { Editor } from "./editor";

interface Props {
  params: Promise<{ documentId: string }>;
}

const DocumentPage: FC<Props> = async ({ params }) => {
  const { documentId } = await params;
  return (
    <div className="min-h-screen bg-neutral-50">
      <Editor />
    </div>
  );
};

export default DocumentPage;
