import mysql from 'mysql2/promise';

export async function POST({ request }) {
  try {
    const formData = await request.formData();
    const qst1 = formData.get('question1');
    const qst2 = formData.get('question2');
    const qst3 = formData.get('question3');
    const qst4 = formData.get('question4');
    const qst5 = formData.get('question5');
    const qst6 = formData.get('question6');
    const qst7 = formData.get('question7');
    const qst8 = formData.get('question8');

    const connection = await mysql.createConnection({
      host: 'caboose.proxy.rlwy.net',
      user: 'root',
      password: 'gRvlThEGXumHJlyFTfDXvURAzPtiQsHj',
      database: 'railway',
      connectTimeout: 60000,
    });

    await connection.execute(
      `INSERT INTO formMulher (qst1, qst2, qst3, qst4, qst5, qst6, qst7, qst8)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
      [qst1, qst2, qst3, qst4, qst5, qst6, qst7, qst8]
    );

    await connection.end();

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error('❌ Erro ao inserir dados no MySQL:', error);
    return new Response(JSON.stringify({ success: false, error: error.message }), { status: 500 });
  }
}
