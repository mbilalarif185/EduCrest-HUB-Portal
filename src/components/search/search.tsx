'use client';
import Image from "next/image";
import React, { useState } from 'react';

const CoursesPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [hasSearched, setHasSearched] = useState(false);
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [error, setError] = useState('');
  const [pakUniName, setPakUniName] = useState('');


  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setHasSearched(true);

    try {
      const response = await fetch('/api/search-moi', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ universityName: searchQuery }),
      });

      const data = await response.json();

      if (data.error) {
        setError(data.error);
        setSearchResults([]);
        setPakUniName('');
      } else {
        setSearchResults(data.uk_universities);
        setPakUniName(data.pak_uni_name);
        setError('');
      }
    } catch (error) {
      setError('Internal server error');
      setSearchResults([]);
    }
  };

  // Static sample courses (shown before search)
  const defaultCourses = [
    {
      id: 1,
      title: "Keele University",
      level: "Medicine, Pharmacy, Nursing, Education, Environmental Science, and Social Sciences.",
      duration: "Ranked 61st in UK",
      enrolled: "Ranked 791–800 in QS World Ranking",
      image_url: "/assets/img/Universities/keele.png",
    },
    {
      id: 2,
      title: "University of South Wales",
      level: "Business, Engineering, MBA",
      duration: "Ranked 95th in the UK",
      enrolled: "Ranked 1201–1500th in the QS World University Ranking",
      image_url: "/assets/img/Universities/southwales.png",
     
    },
    {
      id: 3,
      title: "Anglia Ruskin University",
      level: "Health Sciences, Business, Law, Engineering, and Social Sciences.",
      duration: "Ranked 121st in UK",
      enrolled: "Ranked 500 - 600  in the QS World University Rankings ",
      image_url:  "/assets/img/Universities/ARU.png",
      
    },
  ];
  
  
  // const renderCard = (data: any, isSearchResult = false, index: number) => (
  //   <div className="col-lg-4 col-md-6 col-sm-12 mb-4" key={isSearchResult ? `search-${index}` : data.id}>
  //     <div className="edu-course course-style-3">
  //       <div className="inner">
  //         <div className="thumbnail">
  //           <a href="#">
  //             <img
  //               src={isSearchResult ? data.image_url || "/assets/img/about/4.png" : data.image_url}
  //               alt={data.title || data.university_name}
  //             />
  //           </a>
  //         </div>
  //         <div className="content">
  //           <span className="course-level">
  //             {isSearchResult ? "Accepts MOI" : data.level}
  //           </span>
  //           <h5 className="title">
  //             <a href="#">{isSearchResult ? data.university_name : data.title}</a>
  //           </h5>
  //           <p className="description">
  //             {/* Famous For : {data.famous_for} */}
  //             {isSearchResult && data.famous_for && (
  //               <>Famous For : {data.famous_for}</>
  //             )}
  //           </p>
  //           <p className='ranking'>
  //           {isSearchResult && data.ranking && (
  //               <>Ranking: {data.ranking}</>
  //             )}
  //           </p>
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // );
  const renderCard = (data: any, isSearchResult = false, index: number) => {
    return (
      <div className="col-lg-4 col-md-6 col-sm-12 mb-4" key={isSearchResult ? `search-${index}` : data.id}>
        <div className="edu-course course-style-3">
          <div className="inner">
            <div className="thumbnail">
              <a href="#">
                <img
                  src={data.image_url || "/assets/img/edulogo.webp"}
                  alt={isSearchResult ? data.university_name : data.title}
                />
                
              </a>
             
            </div>
  
            <div className="content">
              {isSearchResult ? (
                <>
                   <br></br>
                  <span className="course-level">Accepts MOI</span>
                  <h5 className="title">
                    <a href="#">{data.university_name}</a>
                  </h5>
                  {data.famous_for && <p className="description">Famous For: {data.famous_for}</p>}
                  {data.ranking && <p className="ranking">Ranking: {data.ranking}</p>}
                </>
              ) : (
                <>
                   <br></br>
                  <h5 className="title">
                    <a href="#">{data.title}</a>
                  </h5>
                  <span className="course-level"><strong>Famous For:</strong>{data.level}</span>
                  <p className="description">{data.description}</p>
                  <p className="duration">{data.duration}</p>
                  <p className="enrolled">{data.enrolled}</p>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  return (
    <div className="container pd-top-120">
      <div className="row">
        <div className="col-12 text-center">
          <h1 className="course-heading">No IELTS? No problem </h1>
          <p className="course-description">
          Check MOI Acceptance
          </p>

          {/* Search Field */}
          <form onSubmit={handleSearchSubmit} className="search-form mt-4">
            <input
              type="text"
              placeholder="Type your university...."
              className="search-input"
              value={searchQuery}
              onChange={handleSearchChange}
            />
            <button type="submit" className="btn btn-search">Search</button>
          </form>

          {/* Error Message */}
          {error && <div className="error-message mt-3 text-danger">{error}</div>}
        </div>
      </div>
      {hasSearched && pakUniName && (
  <div className="row mt-4">
    <div className="col-12 text-center">
      <h4>Following are the UK Universities that Accepting MOI from: <strong>{pakUniName}</strong></h4>
    </div>
  </div>
)}

      {/* Display Cards */}
      <div className="row mt-5">
        {hasSearched && searchResults.length > 0 ? (
          searchResults.map((uni, index) => renderCard(uni, true, index))
        ) : !hasSearched ? (
          defaultCourses.map((course, index) => renderCard(course, false, index))
        ) : (
          <div className="col-12 text-center">
            <p>No universities found for the provided Pakistani university.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CoursesPage;
