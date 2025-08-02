import { config, fields } from "@keystatic/core";

export default config({
  // storage: {
  //   kind: "local",
  // },
  storage: {
    kind: "github",
    repo: "matiasjgelpi/blog",
  },
  collections: {
    posts: {
      label: "Posts",
      slugField: "title",
      path: "src/content/posts/*",
      format: { contentField: "content" },
      schema: {
        title: fields.slug({ name: { label: "Título" } }),
        description: fields.text({
          label: "Descripción",
          multiline: true,
          defaultValue: "Sin descripción",
        }),
        date: fields.date({ label: "Fecha", defaultValue: { kind: "today" } }),
        draft: fields.checkbox({ label: "Borrador" }),
        image: fields.image({
          label: "Imagen",
          description: "Imagen destacada del post",
        }),
        content: fields.markdoc({
          label: "Content",
        }),
      },
    },
  },
});
