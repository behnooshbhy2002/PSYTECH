import "../style/PsyList.css";
import PsyItem from "./PsyItem";
const PsyList = (props) => {
  const DrArr = [
    {
      name: "خانم معصومه مختارپور",
      spaciality: "کارشناسی ارشد روانشناسی",
      medicalNum: 22977,
      experience: 12,
      rating: 4.5,
      picture:
        "https://file.drsaina.com/image/Profile/24d51744-9d6c-4df0-a89c-18f09bc68ca0/160.jpg",
    },
    {
      name: "دکتر مجید مهرمحمدی",
      spaciality: "دکتری تخصصی(Ph.D) روانشناسی",
      medicalNum: 123454,
      experience: 21,
      rating: 4.3,
      picture:
        "https://file.drsaina.com/image/Profile/16af3d68-2c8a-4215-b2da-879ad503ee9c/160.jpg",
    },
    {
      name: "حمیده جنگجو",
      spaciality: "کارشناسی ارشد روانشناسی",
      medicalNum: 16342,
      experience: 11,
      rating: 4.9,
      picture:
        "https://www.drsaina.com/Upload/Image/13971017/160_160/61088dfb_f967_4489_a251_c9100d92c3ac.jpg",
    },
    {
      name: "علی آرام",
      spaciality: "مشاوره کودک",
      medicalNum: 1552,
      experience: 15,
      rating: 4.8,
      picture:
        "https://www.drsaina.com/Upload/Image/13980631/160_160/92d7402f_9622_4a73_962d_37dde509683f.jpg",
    },
    {
      name: "دکتر علیرضا برنامنش",
      spaciality: "کارشناسی ارشد روانشناسی",
      medicalNum: 12454,
      experience: 21,
      rating: 3.8,
      picture:
        "https://statics.doctoreto.com/preset:sharp/resize:fill:180:180:0/gravity:sm/plain/s3://drto/avatar/doctor/2022/8/TBwiXWtITBqfavlGz6rI51ME2R0s00dEwdUiNGEX.jpg",
    },
    {
      name: "دکتر سید محمد حسینی نژاد",
      spaciality: "مشاوره خانواده",
      medicalNum: 5647,
      experience: 21,
      rating: 4.6,
      picture:
        "https://statics.doctoreto.com/preset:sharp/resize:fill:180:180:0/gravity:sm/plain/s3://drto/avatar/doctor/2021/11/Cue1MpNOlilJq9dcpu0jmyDkC4gxdpfayotAZNak.jpg",
    },
    {
      name: "خانم معصومه مختارپور",
      spaciality: "کارشناسی ارشد روانشناسی",
      medicalNum: 22977,
      experience: 12,
      rating: 4.5,
      picture:
        "https://file.drsaina.com/image/Profile/24d51744-9d6c-4df0-a89c-18f09bc68ca0/160.jpg",
    },
    {
      name: "دکتر مجید مهرمحمدی",
      spaciality: "دکتری تخصصی(Ph.D) روانشناسی",
      medicalNum: 123454,
      experience: 21,
      rating: 4.3,
      picture:
        "https://file.drsaina.com/image/Profile/16af3d68-2c8a-4215-b2da-879ad503ee9c/160.jpg",
    },
    {
      name: "حمیده جنگجو",
      spaciality: "کارشناسی ارشد روانشناسی",
      medicalNum: 16342,
      experience: 11,
      rating: 4.9,
      picture:
        "https://www.drsaina.com/Upload/Image/13971017/160_160/61088dfb_f967_4489_a251_c9100d92c3ac.jpg",
    },
    {
      name: "علی آرام",
      spaciality: "مشاوره کودک",
      medicalNum: 1552,
      experience: 15,
      rating: 4.8,
      picture:
        "https://www.drsaina.com/Upload/Image/13980631/160_160/92d7402f_9622_4a73_962d_37dde509683f.jpg",
    },
    {
      name: "دکتر علیرضا برنامنش",
      spaciality: "کارشناسی ارشد روانشناسی",
      medicalNum: 12454,
      experience: 21,
      rating: 3.8,
      picture:
        "https://statics.doctoreto.com/preset:sharp/resize:fill:180:180:0/gravity:sm/plain/s3://drto/avatar/doctor/2022/8/TBwiXWtITBqfavlGz6rI51ME2R0s00dEwdUiNGEX.jpg",
    },
    {
      name: "دکتر سید محمد حسینی نژاد",
      spaciality: "مشاوره خانواده",
      medicalNum: 5647,
      experience: 21,
      rating: 4.6,
      picture:
        "https://statics.doctoreto.com/preset:sharp/resize:fill:180:180:0/gravity:sm/plain/s3://drto/avatar/doctor/2021/11/Cue1MpNOlilJq9dcpu0jmyDkC4gxdpfayotAZNak.jpg",
    },
  ];
  return (
    <>
      <ul className="listOfConsultants_manBox col-lg-9 box boxConsultant col-md-9 ">
        <PsyItem DrArr></PsyItem>
      </ul>
    </>
  );
};
export default PsyList;
