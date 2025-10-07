import { defineDb, defineTable, column } from 'astro:db';

// https://astro.build/db/config

const Pessoa = defineTable({
  columns: {
    nome: column.text(),
    idade: column.number(),
    genero: column.text()
  }
})

const ManForms = defineTable({
  columns: {
    
  }
})

const WomanForms = defineTable({
  columns: {

  }
})

export default defineDb({
  tables: { Pessoa, ManForms, WomanForms }
});
