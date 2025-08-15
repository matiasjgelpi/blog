import { config, fields } from "@keystatic/core";

export default config({
  storage: {
    kind: "local",
    // repo: {
    //   owner: "matiasjgelpi",
    //   name: "blog",
    // },
  },
  collections: {
    posts: {
      label: "Posts",
      slugField: "title",
      path: "src/content/posts/*",
      format: { contentField: "content" },
      schema: {
        title: fields.slug({ name: { label: "Título" } }),
        excerpt: fields.text({
          label: "Descripción",
          multiline: true,
          defaultValue: "Sin descripción",
        }),
        date: fields.date({ label: "Fecha", defaultValue: { kind: "today" } }),
        category: fields.text({ label: "Categoría" }),
        readTime: fields.text({ label: "Tiempo de lectura" }),
        image: fields.image({
          label: "Imagen",
          description: "Imagen destacada del post",
        }),
        content: fields.markdoc({
          label: "Content",
        }),
        featured: fields.checkbox({ label: "Destacado", defaultValue: false }),
      },
    },
  },
  singletons: {
    about: {
      label: "Sobre mí",
      path: "src/content/about/index",
      format: { contentField: "content" },
      schema: {
        title: fields.text({ label: "Título" }),
        description: fields.text({
          label: "Descripción",
          multiline: true,
          defaultValue: "Sin descripción",
        }),
        contact: fields.array(
          fields.object({
            name: fields.text({ label: "Nombre" }),
            URL: fields.text({ label: "URL" }),
          }),
          
        ),
        content: fields.markdoc({
          label: "Content",
        }),
      },
    },
  },
});
