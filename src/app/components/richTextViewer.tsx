import { SerializedEditorState } from '@payloadcms/richtext-lexical/lexical';
import { RichText as RichTextConverter } from '@payloadcms/richtext-lexical/react';

type Props = {
    data: SerializedEditorState
} & React.HTMLAttributes<HTMLDivElement>

export default function RichTextViewer(props: Props) {
    const { className, ...rest } = props;
    return <RichTextConverter {...rest}/>
}