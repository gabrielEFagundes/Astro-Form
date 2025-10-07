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
    qst1: column.text(),
    qst2: column.text(),
    qst3: column.text(),
    qst4: column.text(),
    qst5: column.text(),
    qst6: column.text(),
    qst7: column.text(),
    qst8: column.text(),
    qst9: column.text()
  }
})

const WomanForms = defineTable({
  columns: {
    qst1: column.text(),
    qst2: column.text(),
    qst3: column.text(),
    qst4: column.text(),
    qst5: column.text(),
    qst6: column.text(),
    qst7: column.text(),
    qst8: column.text()
  }
})

export default defineDb({
  tables: { Pessoa, ManForms, WomanForms }
});
