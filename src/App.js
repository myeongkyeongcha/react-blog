
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const post =  '강남 우동 맛집';
  let[글제목,글제목변경] = useState(['가을코디','맛집모음','리액트 독학'])
  const[좋아요수,좋아요수변경]=useState(0);


  return ( 
    <div className="App">

    <div className='black-nav'>
      <h4>ReactBlog</h4>
    </div>

    <button onClick={()=>{
      const copy=[...글제목];
      copy[0]='여자코트 추천';
      글제목변경(copy);
    }}>글 수정하기</button>


    <button onClick={()=>{
      let copy1= [...글제목.sort()];
      글제목변경(copy1);
    }}>오름차순 정렬</button>


    <div className='list'>
      <h4>{글제목[0]} <span onClick={()=>{좋아요수변경(좋아요수+1)}}>👍</span> {좋아요수} </h4>
      <p>10월 10일 발행</p>
    </div>

    <div className='list'>
      <h4>{글제목[1]}</h4>
      <p>10월 12일 발행</p>
    </div>

    <div className='list'>
      <h4>{글제목[2]}</h4>
      <p>10월 13일 발행</p>
    </div>
    <Modal></Modal>

    </div>
  );
}

function Modal(){
  return(
    <div className='modal'>
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}

export default App;
