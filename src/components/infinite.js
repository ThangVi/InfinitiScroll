import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Grid, Image, Container } from 'semantic-ui-react'

import useGallery from '../state/home/hooks/useGallery'

const StyledLi = styled.li`
  width: 100%;
  display: inline-block;
  height: 200px;
  overflow: hidden;
  >div {
    width: 100%;
    height: 200px;
    background-size: cover;
    transition: all 0.3s ease;
    &:hover {
      cursor: zoom-in;
      transform: scale(1.05);
    }
  }
`;

const StyledUl = styled.ul`
  width: 100%;
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(auto-fit,minmax(200px,1fr));
`;

const GridColumn = styled(Grid.Column)`
  margin-bottom: 2rem !important;
`;

const InfiniteList = ({...props}) => {
  
  const [gallery, isLoading, getImage] = useGallery();
  const [pageSize, setPageSize] = useState(25);
  const [pageIndex, setPageIndex] = useState(0);
  const [loadMore, setLoadMore] = useState(true);

  useEffect(() => {
    getData(loadMore);
    setLoadMore(false);
  }, [loadMore]);

  useEffect(() => {
    const list = document.getElementById('list')
    if(props.scrollable) {   
      list.addEventListener('scroll', (e) => {
        const el = e.target;
        if(el.scrollTop + el.clientHeight + 20 === el.scrollHeight) {
          setLoadMore(true);
        }
      });  
    } else {  
      // list has auto height  
      window.addEventListener('scroll', () => {
        if (window.scrollY + window.innerHeight === list.clientHeight + list.offsetTop + 20) {
          setLoadMore(true);
        }
      });
    }
  }, []);

  useEffect(() => {
    const list = document.getElementById('list');
    if(list.clientHeight <= window.innerHeight && list.clientHeight) {
      setLoadMore(true);
    }
  }, [props.state]);

  const getData = (load) => {
    if (load) {
      if (pageIndex < 5) {
        getImage(pageSize, pageIndex);
        setPageIndex(pageIndex + 1);
      }
    }
  };

  return (
    <StyledUl id='list'>
      { props.state.map((img, i) =>
        <StyledLi onClick={(e) => {e.preventDefault(); props.openModal(i)}} key={i}>
          <div style={{backgroundImage: `url(${img})`}}></div>
        </StyledLi>
      )}
    </StyledUl>
  );
};

export default InfiniteList