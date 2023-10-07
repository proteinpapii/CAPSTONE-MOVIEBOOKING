declare type ApiResponse<H> = {
    statusCode: number,
    message: string,
    content: H
}
