/**
 * 인덱스드 엑세스 타입
 */

// interface Post {
//   title: string;
//   content: string;
//   author: {
//     id: number;
//     name: string;
//     age: number;
//   };
// }

// function printAuthorInfo(author: Post["author"]) {
//     console.log(`${author.name}-${author.id}`);
//   }

//   const post: Post = {
//     title: "게시글 제목",
//     content: "게시글 본문",
//     author: {
//       id: 1,
//       name: "이연서",
//       age: 25,
//     },
//   };

//   printAuthorInfo(post.author);

type PostList = {
  title: string;
  content: string;
  author: {
    id: number;
    name: string;
    age: number;
  };
}[];

function printAuthorInfo(author: PostList[number]["author"]) {
  console.log(`${author.name}-${author.id}`);
}

const post: PostList[0] = {
  title: "게시글 제목",
  content: "게시글 본문",
  author: {
    id: 1,
    name: "이연서",
    age: 25,
  },
};

printAuthorInfo(post.author);

type Tup = [number, string, boolean];

type Tup0 = Tup[0];

type Tup1 = Tup[1];

type Tup2 = Tup[2];

// type Tup3 = Tup[3];

type TupNum = Tup[number];
