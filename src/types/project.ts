/** 
 * export 表示这个类型可以被别的文件引入使用。
 * type Project 定义一个项目对象的类型。
 * id：number 每个项目都有个数字id。
 * title：string 项目标题。
 * description：string 项目描述。
 * techStack：string[] 项目使用的技术栈。比如['React', 'TypeScript', 'Node.js']
 * link?:string 项目链接，可选项。
*/
export type Project = {
    id: number;
    title: string;
    description: string;
    techStack: string[];
    link?: string;
    status: "planning" | "building" | "done";
}