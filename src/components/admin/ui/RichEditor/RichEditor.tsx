import { FC } from "react"
import { RichTextEditor } from "@mantine/tiptap"
import { useEditor } from "@tiptap/react"
import Highlight from "@tiptap/extension-highlight"
import StarterKit from "@tiptap/starter-kit"
import Underline from "@tiptap/extension-underline"
import TextAlign from "@tiptap/extension-text-align"
import Superscript from "@tiptap/extension-superscript"
import SubScript from "@tiptap/extension-subscript"
import { Color } from "@tiptap/extension-color"
import TextStyle from "@tiptap/extension-text-style"

interface RichEditorProps {
	content: string
	onChange: (content: string) => void
}

export const RichEditor: FC<RichEditorProps> = ({ content, onChange }) => {
	const editor = useEditor({
		extensions: [
			StarterKit,
			Underline,
			Superscript,
			SubScript,
			Highlight,
			TextAlign.configure({ types: ["heading", "paragraph"] }),
			Color,
			TextStyle,
		],
		content,
		onUpdate: ({ editor }) => onChange(editor.getHTML()),
	})

	return (
		<RichTextEditor editor={editor}>
			<RichTextEditor.Toolbar sticky stickyOffset={60}>
				<RichTextEditor.ControlsGroup>
					<RichTextEditor.ColorPicker
						colors={[
							"#25262b",
							"#868e96",
							"#fa5252",
							"#e64980",
							"#be4bdb",
							"#7950f2",
							"#4c6ef5",
							"#228be6",
							"#15aabf",
							"#12b886",
							"#40c057",
							"#82c91e",
							"#fab005",
							"#fd7e14",
						]}
					/>

					<RichTextEditor.Bold />
					<RichTextEditor.Italic />
					<RichTextEditor.Underline />
					<RichTextEditor.Strikethrough />
					<RichTextEditor.ClearFormatting />
				</RichTextEditor.ControlsGroup>

				<RichTextEditor.ControlsGroup>
					<RichTextEditor.H1 />
					<RichTextEditor.H2 />
					<RichTextEditor.H3 />
					<RichTextEditor.H4 />
				</RichTextEditor.ControlsGroup>

				<RichTextEditor.ControlsGroup>
					<RichTextEditor.Hr />
					<RichTextEditor.BulletList />
					<RichTextEditor.OrderedList />
					<RichTextEditor.Subscript />
					<RichTextEditor.Superscript />
				</RichTextEditor.ControlsGroup>

				<RichTextEditor.ControlsGroup>
					<RichTextEditor.AlignLeft />
					<RichTextEditor.AlignCenter />
					<RichTextEditor.AlignJustify />
					<RichTextEditor.AlignRight />
				</RichTextEditor.ControlsGroup>

				<RichTextEditor.ControlsGroup>
					<RichTextEditor.Undo />
					<RichTextEditor.Redo />
				</RichTextEditor.ControlsGroup>
			</RichTextEditor.Toolbar>

			<RichTextEditor.Content />
		</RichTextEditor>
	)
}
