"use client";

import { CKEditor } from "@ckeditor/ckeditor5-react";
import {
  Bold,
  ClassicEditor,
  Essentials,
  Font,
  FontBackgroundColor,
  FontColor,
  FontFamily,
  FontSize,
  GeneralHtmlSupport,
  Italic,
  ListEditing,
  Mention,
  Paragraph,
  Style,
  Undo,
} from "ckeditor5";
import "ckeditor5/ckeditor5.css";
import "ckeditor5-premium-features/ckeditor5-premium-features.css";
import {
  CaseChange,
  FormatPainter,
  MultiLevelList,
  SlashCommand,
} from "ckeditor5-premium-features";

export default function CustomEditor() {
  return (
    <CKEditor
      editor={ClassicEditor}
      config={{
        toolbar: {
          items: [
            "undo",
            "redo",
            "|",
            "bold",
            "italic",
            "|",
            "style",
            "caseChange",
            "multiLevelList",
            "fontFamily",
            "fontSize",
            "fontColor",
            "fontBackgroundColor",
            "formatPainter",
          ],
        },
        plugins: [
          Bold,
          Essentials,
          Italic,
          Mention,
          Paragraph,
          Undo,
          CaseChange,
          MultiLevelList,
          ListEditing,
          Font,
          FontFamily,
          FontSize,
          FontColor,
          FontBackgroundColor,
          FormatPainter,
          SlashCommand,
          Style,
          GeneralHtmlSupport,
        ],
        style: {
          definitions: [
            {
              name: "Article category",
              element: "h3",
              classes: ["category"],
            },
            {
              name: "Info box",
              element: "p",
              classes: ["info-box"],
            },
          ],
        },
        initialData: "<p>Hello from CKEditor 5 in React!</p>",
        licenseKey:
          "clhoRWRJVjV6MzJPcEdkcU9LYXNSVUI0SVF2MWsyNkR5SERCYTRFT3lqVUVzc2c0SGZ4L1Y4ZUZWWjdDWXc9PS1NakF5TkRBNE1qRT0=",
      }}
      onChange={(event, editor) => {
        console.log(editor.data);
      }}
    />
  );
}
