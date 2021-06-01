import Head from 'next/head';

import styles from './styles.module.scss';

export default function Posts() {
  return (
    <>
      <Head>
        <title>Posts | Ignews</title>
      </Head>

      <main className={styles.container}>
        <div className={styles.posts}>
          <a href="/">
            <time>12 de março de 2021</time>
            <strong>Criando um novo Post</strong>
            <p>
              Nesse artigo, vamos criar um novo post para estilizar o Prismic
              CMS
            </p>
          </a>

          <a href="/">
            <time>12 de março de 2021</time>
            <strong>Criando um novo Post</strong>
            <p>
              Nesse artigo, vamos criar um novo post para estilizar o Prismic
              CMS
            </p>
          </a>

          <a href="/">
            <time>12 de março de 2021</time>
            <strong>Criando um novo Post</strong>
            <p>
              Nesse artigo, vamos criar um novo post para estilizar o Prismic
              CMS
            </p>
          </a>
        </div>
      </main>
    </>
  );
}
