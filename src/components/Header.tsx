import '../styles/styles.css';
import Image from "next/image";

interface HeaderProps {
  title: string;
  username?: string;
}

export default function Header({ title, username }: HeaderProps) {
  return (
    <div>
      <header className="header">
        <div className='header-left'>
          {title}
        </div>
        <div className='header-right'>
          {username &&
            <div className='username'>
              <span>Bem-vindo {username}</span>
              <Image
                src="/images/user.png"
                width={48} // Resolução da Imagem
                height={0}
                className="photo"
                alt="Foto de perfil"
              />
            </div>
          }
        </div>
      </header>
    </div>
  );
}
