import SearchForm from "@/components/main/SearchForm";
import StartupCard from "@/components/main/StartupCard";
import { postsData } from "@/lib/utils";

export default function Home() {
  const query = false;

  return (
    <div className="text-2xl">
      <section className="blue_container">
        <div className="heading">Sức khỏe quý hơn vàng</div>
        <p className="sub-heading !max-w-3xl">
          cùng với đội ngũ y tế xuất sắc chúng tôi luôn mang đến cho quý khách
          hàng một sức khỏe tốt nhất
        </p>
        <SearchForm />
      </section>
      <section className="section_container">
        <p className="text-30-semibold">
          {query ? `Kết quả tìm kiếm cho ${query}` : "Tất cả bác sĩ"}
        </p>
        <ul className="mt-7 card-grid flex flex-wrap gap-6">
          {postsData.length > 0 ? (
            postsData?.map((post) => (
              <StartupCard key={post?.id} post={post} />
            ))
          ) : (
            <p>Không có kết quả trùng khớp</p>
          )}
        </ul>
      </section>
    </div>
  );
}
