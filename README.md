# CkEditor5 installation to React project

1) Create your Ckeditor online in https://ckeditor.com/ckeditor-5/online-builder/

2) Download ckeditor zip and unzip your folder

3) Add download folder to your root of react project

4) Add dependency in your package json. There are 2 ways
  a) First way is add with command line npm add file:./ckeditor5
  b) Open your package.json file and inside dependency object add this line: "ckeditor5-custom-build": "file:ckeditor5",
  

5) npm install --save @ckeditor/ckeditor5-react



6) import { CKEditor } from "@ckeditor/ckeditor5-react"
   import Editor from 'ckeditor5-custom-build/build/ckeditor'
   
   
7) <CKEditor
                    editor={ Editor } // add Editor imported from 'ckeditor5-custom-build/build/ckeditor' here
                    data="<p>Hello from CKEditor 5!</p>"
                    onReady={ editor => {
                        // You can store the "editor" and use when it is needed.
                        console.log( 'Editor is ready to use!', editor );
                    } }
                    onChange={ ( event, editor ) => {
                        const data = editor.getData();
                        console.log( { event, editor, data } );
                    } }
                    onBlur={ ( event, editor ) => {
                        console.log( 'Blur.', editor );
                    } }
                    onFocus={ ( event, editor ) => {
                        console.log( 'Focus.', editor );
                    } }
                />


