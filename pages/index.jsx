import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { DOMAIN, MANGA_NAME, MANGA_DESCRIPTION, MANGA_AUTHOR, MANGA_RELEASE, MANGA_STATUS, MANGA_ARTIST, MANGA_STUDIO, MANGA_GENRE, APP_DESCRIPTION, APP_NAME, MANGA_SUMMARY, COVER_IMG, AUTHOR_PAGE, LOGO_URL, URL_PREFIX, chaptersData, BEHIND_COVER_IMG, RelatedMangaLinks, DOMAIN_NAME, MANGA_TYPE, HEADER_MANGA_DESC, last5chapters } from "@/config";
import Head from "next/head";
import Popup from "@/components/Popup";

export default function Home() {


  const sortedChapters = chaptersData.sort((a, b) => {
    const aParts = a.chapterNumber.match(/(\d+)([a-z]*)/);
    const bParts = b.chapterNumber.match(/(\d+)([a-z]*)/);
    const aNumber = parseInt(aParts[1], 10);
    const bNumber = parseInt(bParts[1], 10);

    if (aNumber === bNumber) {
      return aParts[2].localeCompare(bParts[2]);
    }
    return aNumber - bNumber;
  }).reverse();


  const chapters = sortedChapters.map((chapter) => ({
    number: chapter.chapterNumber,
    url: `${DOMAIN}/${URL_PREFIX}-${chapter.chapterNumber}`
  }));


  const genres = MANGA_GENRE.split(', ');



  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${DOMAIN}`,
        "url": `${DOMAIN}`,
        "name": "Read the legendary I Parry Everything manga online",
        "isPartOf": {
          "@id": `${DOMAIN}/#website`
        },
        "about": {
          "@id": `${DOMAIN}/#/schema/person/4c3ee266c98401p552c9dc20248895eb`
        },
        "primaryImageOfPage": {
          "@id": `${DOMAIN}/#primaryimage`
        },
        "image": {
          "@id": `${DOMAIN}/#primaryimage`
        },
        "thumbnailUrl": `${COVER_IMG}`,
        // "datePublished": "2019-05-24T22:29:53+00:00",
        // "dateModified": "2024-01-13T01:17:47+00:00",
        "description": `${APP_DESCRIPTION}`,
        "breadcrumb": {
          "@id": `${DOMAIN}/#breadcrumb`
        },
        "inLanguage": "en-US",
        "potentialAction": [
          {
            "@type": "ReadAction",
            "target": [`${DOMAIN}`]
          }
        ]
      },
      {
        "@type": "ImageObject",
        "inLanguage": "en-US",
        "@id": `${DOMAIN}/#primaryimage`,
        "url": `${COVER_IMG}`,
        "contentUrl": `${COVER_IMG}`,
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${DOMAIN}/#breadcrumb`,
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home"
          }
        ]
      },
      {
        "@type": "WebSite",
        "@id": `${DOMAIN}/#website`,
        "url": `${DOMAIN}`,
        "name": `${MANGA_NAME} ${MANGA_TYPE} Online`,
        "description": `Read ${MANGA_NAME} ${MANGA_TYPE} Online in High Quality`,
        "publisher": {
          "@id": `${DOMAIN}/#/schema/person/4c3ee266c98401p552c9dc20248825ei`
        },
        "potentialAction": [
          {
            "@type": "SearchAction",
            "target": {
              "@type": "EntryPoint",
              "urlTemplate": `${DOMAIN}/?s={search_term_string}`
            },
            "query-input": "required name=search_term_string"
          }
        ],
        "inLanguage": "en-US"
      },
      {
        "@type": ["Person", "Organization"],
        "@id": `${DOMAIN}/#/schema/person/4c3ee266c98401p552c9dc20248825eb`,
        "name": "admin",
        "image": {
          "@type": "ImageObject",
          "inLanguage": "en-US",
          "@id": `${DOMAIN}/#/schema/person/image/`,
          "url": "https://secure.gravatar.com/avatar/b0077h86d4a8fb469cbb3820ed16bf77?s=96&d=monsterid&r=g",
          "contentUrl": "https://secure.gravatar.com/avatar/b0077h86d4a8fb469cbb3820ed16bf77?s=96&d=monsterid&r=g",
          "caption": "admin"
        },
        "logo": {
          "@id": `${DOMAIN}/#/schema/person/image/`
        }
      }
    ]
  };





  const head = () => (
    <Head>
      <title>{`${MANGA_NAME} Manga Online`}</title>
      <meta name="description" content={APP_DESCRIPTION} />
      <link rel="canonical" href={`${DOMAIN}`} />
      <meta property="og:title" content={`${MANGA_NAME} Manga Online`} />
      <meta property="og:description" content={APP_DESCRIPTION} />
      <meta property="og:type" content="webiste" />
      <meta name="robots" content="follow, index, noarchive, max-snippet:-1, max-video-preview:-1, max-image-preview:large" />
      <meta property="og:url" content={`${DOMAIN}`} />
      <meta property="og:site_name" content={`${APP_NAME}`} />
      <meta property="og:image" content={`${COVER_IMG}`} />
      <meta property="og:image:secure_url" content={`${COVER_IMG}`} />
      <meta property="og:image:type" content="image/jpg" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={`${MANGA_NAME} ${MANGA_TYPE} Online`} />
      <meta name="twitter:description" content={HEADER_MANGA_DESC} />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <meta name="keywords" content="i parry everything, i parry everything manga, i parry everything manhwa, read i parry everything, i parry everything anime, i parry everything read, baca komik i parry everything, baca i parry everything, i parry everything online, sololeveling, i parry everything 1, i parry everything chapter 1, i parry everything webtoon, manga like i parry everything, i parry everything comic, i parry everything1, solo max leveling, i parry everything 147, i parry everything 169, i parry everything light novel, i parry everything manga online, i parry everything read online, i parry everything 149, manga i parry everything, i parry everything 165, i parry everything reddit, only i level up, leveling solo, read solo levelling, i parry everything 168, i parry everything 170, read i parry everything online, i parry everything eng, i parry everything chapter, level up alone, baca manga i parry everything, manhwa like i parry everything, manhwa i parry everything, i parry everything manga read, i parry everything komiku, baca manhwa i parry everything, i parry everything animation, beru i parry everything, anime i parry everything, i parry everything fandom, manhwa similar to i parry everything, manga similar to i parry everything, manga like i parry everything with op mc, solo max level newbie chapter 1, i parry everything manga free, i parry everything anime netflix, thomas andre i parry everything, webtoon i parry everything, manhwa like i parry everything with op mc, i parry everything netflix, sololeveling manga, anime like i parry everything, i parry everything mangago, i parry everything beru, solo levelling manhwa, i parry everything manhwa online, i parry everything 3, i parry everything thomas andre, level up alone manga, manga like i parry everything reddit, manhwa like i parry everything art, i parry everything ao3, level up manga, i parry everything 4, solo max level newbie manga, i parry everything ending, anime solo, i parry everything 5, i parry everything last chapter, i parry everything anime mappa, leveling manhwa, i parry everything anime studio, solo max level newbie manhwa, sololeveling anime, i parry everything 180, solo max newbie, manhwa with leveling system, solo level max, i parry everything 178, i parry everything 179, i parry everything 176, i parry everything volume 5"></meta>
    </Head >
  );






  return (
    <>
      {head()}
      <Navbar />
      <Popup />
      <article>




        <div className='max-w-[1200px] mx-auto md:flex rounded-md md:gap-[80px] bg-[black] mt-8 border border-[#373737] text-[white]'>

          <div className='md:w-[400px] md:pt-0 pt-6'>
            <img className='   md:mx-0 mx-auto' src={`${DOMAIN}/cover1.webp`} alt={`${MANGA_NAME} Cover`} />
          </div>

          <div className='md:w-[700px] md:pr-5 md:p-0 p-4'>
            <h1 className=" tracking-wider text-center font-bold text-2xl pt-6 pb-5">{`${MANGA_NAME}`}</h1>
            <p className=" my-4 leading-[2] text-[15px] px-2 text-center" dangerouslySetInnerHTML={{ __html: MANGA_DESCRIPTION }}></p>

            <div className="flex justify-center items-center  pb-8 md:gap-16 gap-6 flex-wrap mt-14">
              <div className="text-center">
                <p className="font-bold sm:text-[18px] text-[14px] mb-2">Released</p>
                <p className="sm:text-[16px] text-[13px]">{MANGA_RELEASE}</p>
              </div>

              <div className="text-center">
                <p className=" font-bold sm:text-[18px] text-[14px] mb-2">Type</p>
                <p className="sm:text-[16px] text-[13px]">{MANGA_TYPE}</p>
              </div>

              <div className="text-center">
                <p className="font-bold sm:text-[18px] text-[14px] mb-2">Author</p>
                <p className="sm:text-[16px] text-[13px]">{MANGA_AUTHOR}</p>
              </div>

            </div>


          </div>

        </div>









        <h2 id="readmanga" className="font-extrabold text-3xl my-10 px-4 text-center">
          <Link href={DOMAIN} className="hover:underline text-[white]">{`Read ${MANGA_NAME} Manga Online`}</Link>
        </h2>





        <div className='mx-6'>
          <div className=" mt-10 py-3 bg-black border border-[#323232] rounded max-w-[900px] mb-10 mx-auto px-3 flex flex-wrap justify-center max-h-[400px] overflow-y-scroll sm:gap-5 gap-3">

            {chapters?.map((chapter, index) => (
              <div className="flex hover:scale-105 active:scale-95 transition-transform my-1" key={index}>
                <a prefetch={false} href={chapter.url} className="sm:p-5 p-1.5 text-center  hover:underline text-white bg-black hover:bg-[#2c2b2b] border border-[#292828] rounded sm:w-[160px] w-[110px]">
                  <p className="sm:text-[14px] text-[12px] tracking-wider font-semibold">{`Chapter  ${chapter?.number}`}</p>
                </a>
              </div>
            ))}
          </div>
        </div>












        <div className="bg-[black] relative">
          <div className="absolute inset-0 bg-black opacity-80"></div> {/* Dark overlay */}
          <div className="pt-10 pb-10 max-w-[1100px] mx-auto px-5 text-[white] relative z-10">
            <h2 className="text-center font-extrabold text-3xl">{`More About ${MANGA_NAME} Manga`}</h2>
            {MANGA_SUMMARY.map(paragraph => (
              <p className="py-7 leading-[2]" key={paragraph.id}>{paragraph.content}</p>
            ))}
          </div>
        </div>




        <div className="text-white my-5">
          <h2 className="text-3xl text-center my-5">{`${MANGA_NAME} Latest Chapters`}</h2>
          {last5chapters?.map((chapter, index) => (
            <div key={index} className="text-center p-1.5 hover:underline"><a href={`${DOMAIN}/chapter-${chapter.chapterNumber}`}>{`${MANGA_NAME} Chapter ${chapter.chapterNumber}`}</a></div>
          ))}
        </div>



        <h2 className="text-3xl text-white text-center my-5">{`${MANGA_NAME} Images`}</h2>
        <div className="flex justify-center"><img src={`${DOMAIN}/1.webp`} alt={`${MANGA_NAME} Images`} /></div>
        <div className="flex justify-center"><img src={`${DOMAIN}/2.webp`} alt={`${MANGA_NAME} Images`} /></div>
        <div className="flex justify-center"><img src={`${DOMAIN}/3.webp`} alt={`${MANGA_NAME} Images`} /></div>
        <div className="flex justify-center"><img src={`${DOMAIN}/4.webp`} alt={`${MANGA_NAME} Images`} /></div>
        <div className="flex justify-center"><img src={`${DOMAIN}/5.webp`} alt={`${MANGA_NAME} Images`} /></div>





      </article >
      <Footer />
    </>
  );
}