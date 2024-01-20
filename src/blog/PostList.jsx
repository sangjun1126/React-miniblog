import React from "react";
import styled from 'styled-components';
import PostListItem from "./PostListItem";

const Wrapper = styled.div`
    display : flex;
    flex-direction : column;
    align-items : flex-start;
    justify-content : center;
    & > * {
        :not(:last-child) {
            margin-bottom : 16px
        }
    }
`;

// postList 컴포넌트 props로 받은 posts라는 배열에는 post 객체들이 들어있음
// 이 post 배열의 map 함수를 이용하여 각 post 객체에 대해 postList 컴포넌트를 만들어서 렌더링하게 됨.

function PostList(props) {
    const { posts, onClickItem } = props;
  
    // 만약 posts가 배열이 아니면 빈 배열을 사용
    const postArray = Array.isArray(posts) ? posts : [];
  
    return (
      <Wrapper>
        {postArray.map((post, index) => {
          return (
            <PostListItem
              key={post.id}
              post={post}
              onClick={() => {
                onClickItem(post);
              }}
            />
          );
        })}
      </Wrapper>
    );
  }
  
  export default PostList;
  