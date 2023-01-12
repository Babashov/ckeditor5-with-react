import { CKEditor } from "@ckeditor/ckeditor5-react"
import Editor from 'ckeditor5-custom-build/build/ckeditor'
import viewToPlainText from '@ckeditor/ckeditor5-clipboard/src/utils/viewtoplaintext';

import { useState } from "react";

function CkEditor() {

  const [ckValue,setCkValue] = useState('Using CKEditor 5 build in React')

  const [plainTextCkValue,setPlainTextCkValue] = useState(ckValue)

  return (
    <div className="App">
                <h2>{plainTextCkValue}</h2>
                <CKEditor
                    editor={ Editor }
                    data={ckValue}
                    onReady={ editor => {
                        // You can store the "editor" and use when it is needed.
                        console.log( 'Editor is ready to use!', editor );

                        editor.editing.view.change((writer) => {
                          writer.setStyle(
                              "height",
                              "300px",
                              editor.editing.view.document.getRoot()
                          );
                          });
                    } }


                    onChange={ ( event, editor ) => {
                        const data = (editor.getData());
                        const plainData = viewToPlainText(editor.editing.view.document.getRoot())
                        console.log( { event, editor, data } );
                        console.log(plainData)



                        setCkValue(data)
                        setPlainTextCkValue(plainData)
                    } }
                    onBlur={ ( event, editor ) => {
                        console.log( 'Blur.', editor );
                    } }
                    onFocus={ ( event, editor ) => {
                        console.log( 'Focus.', editor );
                    } }
                />

    </div>
  )
}

export default CkEditor