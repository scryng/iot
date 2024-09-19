import '../styles/styles.css';

export default function Card() {

  return (
      <div className='card'>
        <div className="card-header">Título</div>
        <div className="card-body">Conteúdo</div>
        <div className="card-footer">Rodapé</div>
      </div>
  );
}