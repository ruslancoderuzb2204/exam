import { useRouter } from "next/navigation";

export default function Product () {
  const router = useRouter();
  const { slug } = router.query;

  useEffect(() => {
    console.log(slug);
  }, []);

  return <p>Slug: {slug}</p>
}