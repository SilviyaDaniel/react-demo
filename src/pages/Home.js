import CategorySidebar from "../components/CategorySidebar";
import ProductGrid from "../components/ProductGrid";
function Home({ searchText }){
    return (
        <div style={{display:"flex", minHeight: "100vh",
        background: "#f7f7f7",}}>
            <CategorySidebar/>
            <ProductGrid searchText={searchText} />
        </div>
    )
}
export default Home;