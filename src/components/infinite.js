import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Grid, Image, Container } from 'semantic-ui-react'
import Masonry from 'react-masonry-css'

import useGallery from '../state/home/hooks/useGallery'

const breakpointColumnsObj = {
  default: 5,
  1199: 4,
  767: 3,
  400: 2
};

const StyledImg = styled.div`
  width: 100%;
  display: inline-block;
  img {
    width: 100%;
    box-shadow: 0 1px 1px 2px rgba(0,0,0, .15);
    border-radius: 10px;
    transition: all 0.6s ease;
    &:hover {
      cursor: zoom-in;
      transform: scale(1.025);
    }
  }
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
        if((el.scrollTop + el.clientHeight + 20 === el.scrollHeight) || (el.scrollTop + el.clientHeight + 87 === el.scrollHeight)) {
          setLoadMore(true);
        }
      });  
    } else {  
      // list has auto height 
      // 87 or 20 is height from list to bottom screen, 87 is menu bottom
      window.addEventListener('scroll', () => {
        if ((window.scrollY + window.innerHeight === list.clientHeight + list.offsetTop + 20) || (window.scrollY + window.innerHeight === list.clientHeight + list.offsetTop + 87))  {
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
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className="my-masonry-grid"
      id="list"
      columnClassName="my-masonry-grid_column"
    >
      { props.state.map((img, i) =>
        <StyledImg onClick={(e) => {e.preventDefault(); props.openModal(i);}} key={i}>
          <img src={img} alt={img}/>
        </StyledImg>
      )}
    </Masonry>


  );
};

export default InfiniteList