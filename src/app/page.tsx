import Image from 'next/image'



import "./globals.css"




export default function Home() {
  return (
    <main className=" p-3 ">
      <nav className='nav-container'>
        <img src="https://www.goindiastocks.com/Content/assets/images/logewithname.png" className='image'/>
        <input type="search" className='input'></input>
        <p className='header-paragraph'>Contact Us</p>
        <button className='header-button'>SIGN UP</button>
        <button className='header-button'>SIGN IN</button>
        {/* <img className="profile-image" src="https://tse4.explicit.bing.net/th?id=OIP.audMX4ZGbvT2_GJTx2c4GgHaHw&pid=Api&P=0&h=180"/> */}
      </nav>
      <nav className='sub-nav-container'>
        <p className='sub-paragraph'>500</p>
        <p className='sub-paragraph-1'>0.21%</p>
        <p className='sub-paragraph'>NIFTY BANK</p>
        <p className='sub-paragraph'>41.55840</p>
        <p className='sub-paragraph-2'>0.01%</p>
        <p className='sub-paragraph'>BAJAJ FINANCE</p>
        <p className='sub-paragraph'>6,435.50</p>
        <p className='sub-paragraph-1'>0.30%</p>
        <p className='sub-paragraph'>BHARATHIARTL</p>
        <p className='sub-paragraph'>771.95</p>
        <p className='sub-paragraph-2'>0.69%</p>
        <p className='sub-paragraph'>HDFC BANK</p>
        <p className='sub-paragraph'>1,657.10</p>
        <p className='sub-paragraph-2'>0.40%</p>
        <p className='sub-paragraph'>HINDUNILVR</p>
        <p className='sub-paragraph'>2,577.50</p>
        <p className='sub-paragraph-1'>0.38%</p>
        <p className='sub-paragraph'>INDIGO</p>
        <p className='sub-paragraph'>2,043.50</p>

        
      </nav>
     <h1 className='company-heading'>FEATURED COMPANIES</h1>
     <nav className='company-nav-container'>
      <img className="company-image-1" src="https://media.licdn.com/dms/image/C4D0BAQENwpfadMqQPA/company-logo_200_200/0/1647003423947?e=2147483647&v=beta&t=JwajWjr1jx8l6ja7Axkub_bboFxMEFc2yQqnhUyWozU"/>
      <img className="company-image" src="https://ganeshhousing.com/assets/main/images/logo-black.png"/>
      <img className="company-image-1" src="https://tse1.mm.bing.net/th?id=OIP.ehRnD5epE_MdRc10j0Kn2wAAAA&pid=Api&P=0&h=180"/>
      <img className="company-image-1" src="https://tse1.mm.bing.net/th?id=OIP.SF2YxD70cQk_4cqx83SyAwAAAA&pid=Api&P=0&h=180"/>
      <img className="company-image" src="https://tse3.mm.bing.net/th?id=OIP.9AfqjDlZagXUW8x4G-cZ3gHaDw&pid=Api&P=0&h=180"/>
      <img className="company-image-1" src="https://www.datapatternsindia.com/images/logo.png"/>
      <img className="company-image-1" src="https://media.licdn.com/dms/image/C4D0BAQENwpfadMqQPA/company-logo_200_200/0/1647003423947?e=2147483647&v=beta&t=JwajWjr1jx8l6ja7Axkub_bboFxMEFc2yQqnhUyWozU"/>
      <img className="company-image" src="https://ganeshhousing.com/assets/main/images/logo-black.png"/>
      <img className="company-image-1" src="https://tse1.mm.bing.net/th?id=OIP.ehRnD5epE_MdRc10j0Kn2wAAAA&pid=Api&P=0&h=180"/>
      <img className="company-image-1" src="https://tse1.mm.bing.net/th?id=OIP.SF2YxD70cQk_4cqx83SyAwAAAA&pid=Api&P=0&h=180"/>
      <img className="company-image" src="https://tse3.mm.bing.net/th?id=OIP.9AfqjDlZagXUW8x4G-cZ3gHaDw&pid=Api&P=0&h=180"/>
      <img className="company-image-1" src="https://www.datapatternsindia.com/images/logo.png"/>
      
     </nav>
     <div className='bottom-container'>
     <div className="bottom-sub-container">
    <h1 className='company-heading'>DISCUSSION FORM</h1>
    <p className='company-paragraph'>Filters</p>
    <div className='filters-main-container'>
      <div className='section-1-container'>Section 1</div>
      <div className='section-2-container'>Section 2</div>
      <div className='section-3-container'>Section 3</div>
      <input type="search" placeholder='search here' className='filter-input'></input>
    </div>
   
    
    <div className='filters-detail-container'>
      <p className='detail-paragraph'>2 mins ago</p>
      <img src="https://www.ia.ooo/wp-content/uploads/2022/06/infibeam-logo-new.png" className='detail-image'/>
      <div className='user-container'><img className="profile-image" src="https://tse4.explicit.bing.net/th?id=OIP.audMX4ZGbvT2_GJTx2c4GgHaHw&pid=Api&P=0&h=180"/>
      <h1 className='detail-heading'>Lorem Ipsum</h1>
      <div className='section-1-detail-container'>Section 1</div>

      </div>
      <p className="details-paragraph">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem ipsum is
      </p>
      <div className='reactions-container'>
        <div className="reaction-sub-container">
        <img src="https://tse3.mm.bing.net/th?id=OIP.ZOb29g25Z8TEXJvqO1N0IQHaH_&pid=Api&P=0&h=180" className='reaction-image'/>
        <p className='reaction-paragraph'>2k</p>
        </div>
        <div className="reaction-sub-container">
        <img src="https://tse2.mm.bing.net/th?id=OIP.2J5VcjHkI_GIXJJvAUCShAHaD8&pid=Api&P=0&h=180" className='reaction-image'/>
        <p className='reaction-paragraph'>2k</p>
        </div>
        <div className="reaction-sub-container">
        <img src="https://tse4.mm.bing.net/th?id=OIP.05ii4NbTas6Hhpo_eGxpeQHaGL&pid=Api&P=0&w=300&h=300" className='reaction-image'/>
        <p className='reaction-paragraph'>2k Comments</p>
        </div>
        <div className="reaction-sub-container">
        <img src="https://tse4.mm.bing.net/th?id=OIP.eHxMdln9mcArYFrmRFKCDwHaIP&pid=Api&P=0&h=180" className='reaction-image'/>
        <p className='reaction-paragraph'>Share</p>
        </div>
      </div>
    </div>
   
    <div className='filters-details-container'>
      <p className='detail-paragraph'>2 mins ago</p>
      
      <div className='user-container'><img className="profile-image" src="https://tse4.explicit.bing.net/th?id=OIP.audMX4ZGbvT2_GJTx2c4GgHaHw&pid=Api&P=0&h=180"/>
      <h1 className='detail-heading'>Lorem Ipsum</h1>
      <div className='section-2-detail-container'>Section 2</div>

      </div>
      <p className="details-paragraph">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem ipsum is
      </p>
      <div className='reactions-container'>
        <div className="reaction-sub-container">
        <img src="https://tse4.mm.bing.net/th?id=OIP.LtTLL7Cn2OwQjnHHq8jxFAHaG4&pid=Api&P=0&h=180" className='reaction-image'/>
        <p className='reaction-paragraph'>2k</p>
        </div>
        <div className="reaction-sub-container">
        <img src="https://tse2.mm.bing.net/th?id=OIP.2J5VcjHkI_GIXJJvAUCShAHaD8&pid=Api&P=0&h=180" className='reaction-image'/>
        <p className='reaction-paragraph'>2k</p>
        </div>
        <div className="reaction-sub-container">
        <img src="https://tse4.mm.bing.net/th?id=OIP.05ii4NbTas6Hhpo_eGxpeQHaGL&pid=Api&P=0&w=300&h=300" className='reaction-image'/>
        <p className='reaction-paragraph'>2k Comments</p>
        </div>
        <div className="reaction-sub-container">
        <img src="https://tse4.mm.bing.net/th?id=OIP.eHxMdln9mcArYFrmRFKCDwHaIP&pid=Api&P=0&h=180" className='reaction-image'/>
        <p className='reaction-paragraph'>Share</p>
        </div>
      </div>
    </div>
    <div className='filters-details-container'>
      <p className='detail-paragraph'>2 mins ago</p>
      
      <div className='user-container'><img className="profile-image" src="https://tse3.mm.bing.net/th?id=OIP.4-XJgKedSGAJsylU8WfQGgHaHa&pid=Api&P=0&h=180"/>
      <h1 className='detail-heading'>Lorem Ipsum</h1>
      <div className='section-3-detail-container'>Section 3</div>

      </div>
      <p className="details-paragraph">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem ipsum is
      </p>
      <div className='reactions-container'>
        <div className="reaction-sub-container">
        <img src="https://tse4.mm.bing.net/th?id=OIP.LtTLL7Cn2OwQjnHHq8jxFAHaG4&pid=Api&P=0&h=180" className='reaction-image'/>
        <p className='reaction-paragraph'>2k</p>
        </div>
        <div className="reaction-sub-container">
        <img src="https://tse2.mm.bing.net/th?id=OIP.2J5VcjHkI_GIXJJvAUCShAHaD8&pid=Api&P=0&h=180" className='reaction-image'/>
        <p className='reaction-paragraph'>2k</p>
        </div>
        <div className="reaction-sub-container">
        <img src="https://tse4.mm.bing.net/th?id=OIP.05ii4NbTas6Hhpo_eGxpeQHaGL&pid=Api&P=0&w=300&h=300" className='reaction-image'/>
        <p className='reaction-paragraph'>2k Comments</p>
        </div>
        <div className="reaction-sub-container">
        <img src="https://tse4.mm.bing.net/th?id=OIP.eHxMdln9mcArYFrmRFKCDwHaIP&pid=Api&P=0&h=180" className='reaction-image'/>
        <p className='reaction-paragraph'>Share</p>
        </div>
      </div>
     
    </div>
   
    </div>
    <div className='market-container'>
    <h1 className='market-heading'>MARKET STORIES</h1>
    <div className='image-1-container'>
      <p className='market-paragraph'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem ipsum is</p>
    </div>
    <div className='image-2-container'>
      <p className='market-paragraph'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem ipsum is</p>
    </div>
    <div className='image-3-container'>
      <p className='market-paragraph'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem ipsum is</p>
    </div>
    </div>
    

   </div>
    </main>
  )
}
