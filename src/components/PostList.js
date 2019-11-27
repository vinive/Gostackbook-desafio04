import React, { Component } from 'react';

import PostItem from './PostItem';

class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: 'Vinicius Valencio',
          avatar: 'https://scontent.fumu1-1.fna.fbcdn.net/v/t1.0-9/p960x960/51019937_1892114384248887_2673885285158223872_o.jpg?_nc_cat=109&_nc_ohc=gKMJXhFWjKYAQm5jVQvy0JRej5qRFEsuGAxzF607ye52gU_lwpUQgC9pw&_nc_ht=scontent.fumu1-1.fna&oh=e09cc39a58e86d04e8ed601148c9e36c&oe=5E49CE7B'
        },
        date: '27 Nov 2019',
        content: 'Pessoal, alguém sabe se a Rocketseat está contratando?',
        comments: [
          {
            id: 2,
            author: {
              name: 'Diego Fernandes',
              avatar: 'https://avatars2.githubusercontent.com/u/2254731?v=4'
            },
            date: '04 Jun 2019',
            content:
              'A Rocketseat está sempre em busca de novos membros para o time, e geralmente ficamos de olho em quem se destaca no Bootcamp, inclusive 80% do nosso time de devs é composto por alunos do Bootcamp. Além disso, se você tem vontade de ensinar gravando vídeos e criando posts, pode me chamar no Discord! (Sério, me chamem mesmo, esse comentário é real)'
          }
        ]
      }, {
        id: 2,
        author: {
          name: 'Diego Fernandes',
          avatar: 'https://avatars2.githubusercontent.com/u/2254731?v=4'
        },
        date: '27 Nov 2019',
        content: 'Fala Devs, O que vocês estão achando do Bootcamp 9.0?',
        comments: [
          {
            id: 3,
            author: {
              name: 'Clara Voorhees',
              avatar: 'https://i.pravatar.cc/150?img=5'
            },
            date: '04 Jun 2019',
            content:
              'Estou fazendo o Bootcamp e estou adorando! Estou no terceiro módulo sobre Node e já tenho minha API dos desafios construída!'
          },
          {
            id: 1,
        author: {
          name: 'Vinicius Valencio',
          avatar: 'https://scontent.fumu1-1.fna.fbcdn.net/v/t1.0-9/p960x960/51019937_1892114384248887_2673885285158223872_o.jpg?_nc_cat=109&_nc_ohc=gKMJXhFWjKYAQm5jVQvy0JRej5qRFEsuGAxzF607ye52gU_lwpUQgC9pw&_nc_ht=scontent.fumu1-1.fna&oh=e09cc39a58e86d04e8ed601148c9e36c&oe=5E49CE7B'
            },
            date: '04 Jun 2019',
            content:
              'SENSACIONAL, uma experiencia fantastica e um conhecimento absurdo adiquirido em tão pouco tempo!'
          }
          
        ]
      }, {
        id: 3,
            author: {
              name: 'Clara Voorhees',
              avatar: 'https://i.pravatar.cc/150?img=5'
        
        },
        date: '27 Nov 2019',
        content: 'Fala galera, beleza?\nEstou fazendo o Bootcamp GoStack e está sendo muito massa! Alguém mais aí fazendo? Comenta aí na publicação para trocarmos uma idéia',
        comments: [
          {
            id: 1,
        author: {
          name: 'Vinicius Valencio',
          avatar: 'https://scontent.fumu1-1.fna.fbcdn.net/v/t1.0-9/p960x960/51019937_1892114384248887_2673885285158223872_o.jpg?_nc_cat=109&_nc_ohc=gKMJXhFWjKYAQm5jVQvy0JRej5qRFEsuGAxzF607ye52gU_lwpUQgC9pw&_nc_ht=scontent.fumu1-1.fna&oh=e09cc39a58e86d04e8ed601148c9e36c&oe=5E49CE7B'
            },
            date: '27 Nov 2019',
            content:
              'Também estou fazendo o Bootcamp e estou adorando! Estou no terceiro módulo sobre Node e já tenho minha API dos desafios construída!'
          }
        ]
      },
      
    ]
  };

  render() {
    const { posts } = this.state;

    return (
      <div className="postlist">
        {posts.map(post => (
          <PostItem key={post.id} {...post} />
        ))}
      </div>
    );
  }
}

export default PostList;