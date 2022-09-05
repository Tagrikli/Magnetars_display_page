import { useState } from "react";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack";

type Props = {
    file: any;
};

export default function PDFViewer({ file }: Props) {
    return <iframe width="100%" height="100%" src={file} />;
}
