import mysql from 'mysql2/promise';

export async function POST({ request }) {
  try {
    const formData = await request.formData();
    const name = formData.get('name');
    const age = formData.get('age');
    const gender = formData.get('gender');

    const connection = await mysql.createConnection({
      host: 'caboose.proxy.rlwy.net',
      user: 'root',
      password: 'gRvlThEGXumHJlyFTfDXvURAzPtiQsHj',
      database: 'railway',
      connectTimeout: 60000,
    });

    await connection.execute(
      'INSERT INTO usuarios (nome, idade, genero) VALUES (?, ?, ?)',
      [name, age, gender]
    );

    await connection.end();

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (err) {
    console.error('Erro ao inserir no MySQL:', err);
    return new Response(JSON.stringify({ success: false, error: err.message }), {
      status: 500,
    });
  }
}
