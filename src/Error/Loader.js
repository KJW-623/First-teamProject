
export async function Loader() {

    try {
        const response = await fetch("http://localhost:3000/api/test");

        if (!response.ok) {
            const errorData = await response.json();

            throw new Response(
                JSON.stringify({
                    message: errorData.message || "서버 오류 발생",
                }),
                { status: response.status || 500 }
            );
        }

        const resData = await response.json();
        return resData;
    } catch (error) {
        throw new Response(
            JSON.stringify({ message: "서버에 연결할 수 없습니다." }),
            { status: 500 }
        );
    }
}
