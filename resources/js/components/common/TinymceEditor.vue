<template>
    <div id="app">
        <editor
            api-key="no-api-key"
            :init="{
                 height: 500,
                 menubar: false,
                 setup: (editor) => SetupTools(editor),
                 plugins: [
                   'advlist autolink lists link image charmap print preview anchor',
                   'searchreplace visualblocks code fullscreen',
                   'insertdatetime media table paste code help wordcount'
                 ],
                 toolbar:
                   'undo redo basicDateButton | formatselect | bold italic backcolor | \
                   alignleft aligncenter alignright alignjustify | \
                   bullist numlist outdent indent | removeformat | help '
            }"
        />
    </div>
</template>

<script>
    import Editor from '@tinymce/tinymce-vue'
    import Datepicker from 'vuejs-datepicker';

    export default {
        name: 'TinymceEditor',
        components: {
            'editor': Editor
        },
        methods: {
            SetupTools(editor) {
                editor.ui.registry.addButton('basicDateButton', {
                    text: 'Insert Date',
                    tooltip: 'Insert Current Date',
                    onAction: function (_) {
                        // console.log(editor)
                        // editor.selection.setContent("<Datepicker />")
                        // editor.insertContent('с уважением  <Имя клиента> от <new Date()>');

                        editor.focus();
                        editor.selection.setContent('<tittle>' + editor.selection.getContent() + '</tittle>');
                    }
                });

            }
        }
    }
</script>
