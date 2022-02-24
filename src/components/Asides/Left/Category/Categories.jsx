import React from "react";
import {
  HiAcademicCap,
  HiBriefcase,
  HiChartPie,
  HiGift,
  HiGlobe,
} from "react-icons/hi";
import { GiMountaintop } from "react-icons/gi";
import Category from "./Category";

function Categories(props) {
  const general = props.data.filter(
    (category) => category.isCompleted === false
  );
  const sports = props.data.filter(
    (category) =>
      category.category.toLowerCase() === "sports" &&
      category.isCompleted === false
  );
  const learning = props.data.filter(
    (category) =>
      category.category.toLowerCase() === "learning" &&
      category.isCompleted === false
  );
  const trip = props.data.filter(
    (category) =>
      category.category.toLowerCase() === "trip" &&
      category.isCompleted === false
  );
  const work = props.data.filter(
    (category) =>
      category.category.toLowerCase() === "work" &&
      category.isCompleted === false
  );
  return (
    <section
      id="catergoties"
      className="mt-6 hidden bg-white py-1 px-5 shadow-sm shadow-white xl:block"
    >
      <div id="cat-title" className="mb-2 flex items-center gap-2">
        <HiChartPie className="h-6 w-6 text-blue-500" />
        <h1 className="font-poppins text-xl font-semibold text-gray-600">
          Tasks Categories
        </h1>
      </div>
      <hr />
      <div id="cat-lists" className="mt-5">
        <Category
          category="General"
          color="#2563EB"
          total={general.length}
          icon={<HiGift className="h-7 w-7" />}
        />
        <Category
          category="Sports"
          color="#16A34A"
          total={sports.length}
          icon={<HiGlobe className="h-7 w-7" />}
        />
        <Category
          category="Learning"
          color="#0891B2"
          total={learning.length}
          icon={<HiAcademicCap className="h-7 w-7" />}
        />
        <Category
          category="Trip"
          color="#CA8A04"
          total={trip.length}
          icon={<GiMountaintop className="h-7 w-7" />}
        />
        <Category
          category="Work"
          color="#DC2626"
          total={work.length}
          icon={<HiBriefcase className="h-7 w-7" />}
        />
      </div>
    </section>
  );
}

export default Categories;
