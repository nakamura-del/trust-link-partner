import { CUSTOM_BODIES } from "./blog-articles";

export type BlogCategory = { id: string; label: string };

export const BLOG_CATEGORIES: BlogCategory[] = [
  { id: "ai", label: "AI導入" },
  { id: "claude", label: "Claude" },
  { id: "claude-code", label: "Claude Code" },
  { id: "dx", label: "DX推進" },
  { id: "crm", label: "CRM" },
  { id: "succession", label: "事業承継" },
  { id: "realestate-dx", label: "不動産DX" },
  { id: "pachinko", label: "パチンコ業界の未来" },
];

type Topic = { slug: string; cat: string; title: string; description: string };

const TOPICS: Topic[] = [
  // ===== AI導入 15 =====
  { slug: "ai-01", cat: "ai", title: "中小企業のAI導入は何から始める？失敗しない進め方を解説", description: "中小企業がAI導入を成功させるための最初の一歩と、失敗しない進め方を分かりやすく解説します。" },
  { slug: "ai-02", cat: "ai", title: "AI導入の費用相場と費用対効果の考え方", description: "AI導入にかかる費用の考え方と、投資対効果を見極めるためのポイントを解説します。" },
  { slug: "ai-03", cat: "ai", title: "AI導入で成果を出すための業務選びのコツ", description: "AI導入で確実に成果を出すために、最初に着手すべき業務の選び方を解説します。" },
  { slug: "ai-04", cat: "ai", title: "生成AIと従来のAIの違いをわかりやすく解説", description: "生成AIと従来のAIの違いを、ビジネス活用の観点から分かりやすく整理します。" },
  { slug: "ai-05", cat: "ai", title: "AI導入が失敗する5つの原因と対策", description: "AI導入でよくある失敗の原因と、それを防ぐための具体的な対策を解説します。" },
  { slug: "ai-06", cat: "ai", title: "社内にAIを定着させる方法とSOP化の重要性", description: "導入したAIを現場に定着させるための方法と、SOP（標準作業手順）化の重要性を解説します。" },
  { slug: "ai-07", cat: "ai", title: "AI導入はスモールスタートが成功の鍵", description: "AI導入を小さく始めて確実に成果を積み上げる、スモールスタートの進め方を解説します。" },
  { slug: "ai-08", cat: "ai", title: "AIで業務自動化｜まず取り組むべき定型業務とは", description: "AIによる業務自動化で、最初に取り組むべき定型業務の見極め方を解説します。" },
  { slug: "ai-09", cat: "ai", title: "AI導入のセキュリティ対策と運用ルールの作り方", description: "AI導入時の情報漏洩を防ぐための、安全な運用ルールの作り方を解説します。" },
  { slug: "ai-10", cat: "ai", title: "AI導入の効果測定｜KPIの決め方と振り返り方", description: "AI導入の効果を正しく測るためのKPIの決め方と、振り返りの進め方を解説します。" },
  { slug: "ai-11", cat: "ai", title: "AI導入に補助金は使える？活用のポイント", description: "AI導入で活用できる補助金の考え方と、申請のポイントを解説します。" },
  { slug: "ai-12", cat: "ai", title: "経営者が知っておくべきAI導入の判断基準", description: "経営者がAI導入を判断する際に押さえておくべき基準と考え方を解説します。" },
  { slug: "ai-13", cat: "ai", title: "AI導入で社員の仕事はどう変わるのか", description: "AI導入によって社員の仕事がどう変わるのか、現実的な視点で解説します。" },
  { slug: "ai-14", cat: "ai", title: "属人化を解消するAI活用術", description: "特定の担当者に依存した属人化業務を、AIで解消する方法を解説します。" },
  { slug: "ai-15", cat: "ai", title: "AI導入の相談先の選び方｜伴走型支援とは", description: "AI導入の相談先をどう選ぶか、伴走型支援のメリットとあわせて解説します。" },

  // ===== Claude 15 =====
  { slug: "claude-01", cat: "claude", title: "Claudeとは？ビジネス活用の基本をわかりやすく解説", description: "AI「Claude」とは何か、ビジネスでの活用方法の基本を分かりやすく解説します。" },
  { slug: "claude-02", cat: "claude", title: "ClaudeとChatGPTの違いを業務利用の観点で比較", description: "ClaudeとChatGPTの違いを、業務利用の観点から分かりやすく比較します。" },
  { slug: "claude-03", cat: "claude", title: "Claudeの日本語性能は？実務での使いどころ", description: "Claudeの日本語性能と、実務でどう活かせるかを具体的に解説します。" },
  { slug: "claude-04", cat: "claude", title: "Claudeを業務で使う5つのメリット", description: "Claudeを業務に取り入れることで得られる、5つの主なメリットを解説します。" },
  { slug: "claude-05", cat: "claude", title: "Claudeの料金プランの選び方｜個人・法人別", description: "Claudeの料金プランを、個人利用・法人利用それぞれの観点で選ぶポイントを解説します。" },
  { slug: "claude-06", cat: "claude", title: "Claudeで議事録を要約する方法と注意点", description: "Claudeを使って議事録を効率的に要約する方法と、注意すべき点を解説します。" },
  { slug: "claude-07", cat: "claude", title: "Claudeでメール作成を効率化するコツ", description: "Claudeを活用してメール作成を効率化する、具体的なコツを解説します。" },
  { slug: "claude-08", cat: "claude", title: "Claudeの安全性と機密情報を扱う際の運用ルール", description: "Claudeの安全性と、機密情報を扱う際に押さえるべき運用ルールを解説します。" },
  { slug: "claude-09", cat: "claude", title: "Claudeで長文資料を読み解く活用法", description: "Claudeの長文理解力を活かして、資料を効率的に読み解く方法を解説します。" },
  { slug: "claude-10", cat: "claude", title: "Claudeのプロンプトのコツ｜回答精度を上げる書き方", description: "Claudeの回答精度を上げるための、プロンプト（指示）の書き方のコツを解説します。" },
  { slug: "claude-11", cat: "claude", title: "Claude導入を社内に定着させる進め方", description: "Claudeを社内に定着させ、組織全体で活用するための進め方を解説します。" },
  { slug: "claude-12", cat: "claude", title: "Claudeでできること一覧｜業務別の活用例", description: "Claudeでできることを、業務別の具体的な活用例とともに紹介します。" },
  { slug: "claude-13", cat: "claude", title: "Claudeで問い合わせ一次対応を自動化する", description: "Claudeを使って問い合わせの一次対応を自動化する方法を解説します。" },
  { slug: "claude-14", cat: "claude", title: "Claudeの画像理解機能の業務活用", description: "Claudeの画像理解機能を、業務でどう活用できるかを解説します。" },
  { slug: "claude-15", cat: "claude", title: "Claude導入支援を依頼するメリットと選び方", description: "Claude導入支援を専門家に依頼するメリットと、依頼先の選び方を解説します。" },

  // ===== Claude Code 15 =====
  { slug: "cc-01", cat: "claude-code", title: "Claude Codeとは？できることをわかりやすく解説", description: "開発支援AI「Claude Code」とは何か、できることを分かりやすく解説します。" },
  { slug: "cc-02", cat: "claude-code", title: "Claude Codeはエンジニア以外でも使える？", description: "Claude Codeがエンジニア以外の業務にも使えるのか、活用例とともに解説します。" },
  { slug: "cc-03", cat: "claude-code", title: "Claude Codeの導入手順と環境構築のポイント", description: "Claude Codeの導入手順と、環境構築でつまずかないためのポイントを解説します。" },
  { slug: "cc-04", cat: "claude-code", title: "Claude CodeとClaudeの違いと使い分け方", description: "Claude CodeとClaudeの違いを整理し、業務での使い分け方を解説します。" },
  { slug: "cc-05", cat: "claude-code", title: "Claude Codeで業務を自動化する活用例", description: "Claude Codeを使って業務を自動化する、具体的な活用例を紹介します。" },
  { slug: "cc-06", cat: "claude-code", title: "Claude Codeのセキュリティと安全な運用", description: "Claude Codeを安全に運用するためのセキュリティ対策を解説します。" },
  { slug: "cc-07", cat: "claude-code", title: "Claude Codeで開発生産性を上げる方法", description: "Claude Codeを活用して開発生産性を高める、具体的な方法を解説します。" },
  { slug: "cc-08", cat: "claude-code", title: "Claude Codeでドキュメント作成を効率化する", description: "Claude Codeを使って仕様書や手順書などのドキュメント作成を効率化する方法を解説します。" },
  { slug: "cc-09", cat: "claude-code", title: "Claude Codeをチームで使うための運用ルール", description: "Claude Codeをチームで安定して使うための運用ルールの作り方を解説します。" },
  { slug: "cc-10", cat: "claude-code", title: "CLI未経験でもClaude Codeを使い始める方法", description: "コマンド操作に不慣れでもClaude Codeを使い始めるための方法を解説します。" },
  { slug: "cc-11", cat: "claude-code", title: "Claude Codeで小規模ツールを内製化するメリット", description: "外注していた小規模ツールをClaude Codeで内製化するメリットを解説します。" },
  { slug: "cc-12", cat: "claude-code", title: "Claude Codeの料金と費用対効果", description: "Claude Codeの料金体系と、費用対効果の考え方を解説します。" },
  { slug: "cc-13", cat: "claude-code", title: "Claude Codeを既存の開発フローに組み込む方法", description: "Claude Codeを既存の開発・業務フローに無理なく組み込む方法を解説します。" },
  { slug: "cc-14", cat: "claude-code", title: "Claude Codeのコード品質はどこまで信頼できる？", description: "Claude Codeが生成するコードの品質と、安全に活用するための運用を解説します。" },
  { slug: "cc-15", cat: "claude-code", title: "Claude Code導入支援で何が変わるか", description: "Claude Codeの導入支援を受けることで何が変わるのかを解説します。" },

  // ===== DX推進 15 =====
  { slug: "dx-01", cat: "dx", title: "DX化とは？中小企業向けにわかりやすく解説", description: "DX（デジタルトランスフォーメーション）とは何か、中小企業向けに分かりやすく解説します。" },
  { slug: "dx-02", cat: "dx", title: "DXは何から始める？最初の一歩の見つけ方", description: "DXを何から始めればよいのか、最初の一歩の見つけ方を解説します。" },
  { slug: "dx-03", cat: "dx", title: "デジタル化とDXの違いを正しく理解する", description: "混同されがちなデジタル化とDXの違いを、正しく整理して解説します。" },
  { slug: "dx-04", cat: "dx", title: "DXが失敗する原因と成功のポイント", description: "DX推進が失敗する主な原因と、成功させるためのポイントを解説します。" },
  { slug: "dx-05", cat: "dx", title: "紙とエクセル業務を脱却するDXの進め方", description: "紙やエクセル中心の業務を脱却するための、DXの進め方を解説します。" },
  { slug: "dx-06", cat: "dx", title: "DXの内製化とは？外部依存を減らす方法", description: "DXの内製化とは何か、外部依存を減らし社内で自走する方法を解説します。" },
  { slug: "dx-07", cat: "dx", title: "中小企業がDXに取り組むべき理由", description: "人手が限られる中小企業こそDXに取り組むべき理由を解説します。" },
  { slug: "dx-08", cat: "dx", title: "DXの費用と段階的な投資の考え方", description: "DX推進にかかる費用と、過剰投資を避ける段階的な進め方を解説します。" },
  { slug: "dx-09", cat: "dx", title: "データ活用で意思決定を変えるDX", description: "分散したデータを活用し、意思決定を変えるDXの進め方を解説します。" },
  { slug: "dx-10", cat: "dx", title: "DX推進に必要な社内体制づくり", description: "DXを推進するために必要な社内体制づくりのポイントを解説します。" },
  { slug: "dx-11", cat: "dx", title: "DX人材がいない企業のための進め方", description: "専任のDX人材やIT担当がいない企業でも進められるDXの方法を解説します。" },
  { slug: "dx-12", cat: "dx", title: "業務効率化から始めるDXロードマップ", description: "業務効率化を起点にした、現実的なDXロードマップの描き方を解説します。" },
  { slug: "dx-13", cat: "dx", title: "クラウド化はDXに必要か？判断のポイント", description: "DXにおけるクラウド化の必要性と、導入を判断するポイントを解説します。" },
  { slug: "dx-14", cat: "dx", title: "DX推進のセキュリティ対策の基本", description: "DX推進にあたって押さえておくべきセキュリティ対策の基本を解説します。" },
  { slug: "dx-15", cat: "dx", title: "DX推進の伴走支援を選ぶポイント", description: "DX推進を支える伴走支援を選ぶ際のポイントを解説します。" },

  // ===== CRM 10 =====
  { slug: "crm-01", cat: "crm", title: "CRMとは？導入のメリットをわかりやすく解説", description: "CRM（顧客管理）とは何か、導入のメリットを分かりやすく解説します。" },
  { slug: "crm-02", cat: "crm", title: "CRM導入の選び方｜失敗しないポイント", description: "自社に合うCRMの選び方と、導入で失敗しないためのポイントを解説します。" },
  { slug: "crm-03", cat: "crm", title: "エクセル管理からCRMへ移行するタイミング", description: "エクセルでの顧客管理からCRMへ移行すべきタイミングを解説します。" },
  { slug: "crm-04", cat: "crm", title: "CRMで顧客対応の漏れをなくす方法", description: "CRMを使って顧客対応の抜け漏れをなくす方法を解説します。" },
  { slug: "crm-05", cat: "crm", title: "CRM導入の費用と費用対効果", description: "CRM導入にかかる費用と、費用対効果の考え方を解説します。" },
  { slug: "crm-06", cat: "crm", title: "CRMの定着に必要な運用ルール", description: "導入したCRMを定着させるために必要な運用ルールを解説します。" },
  { slug: "crm-07", cat: "crm", title: "中小企業向けCRMの選定基準", description: "中小企業がCRMを選ぶ際に押さえるべき選定基準を解説します。" },
  { slug: "crm-08", cat: "crm", title: "CRMで営業の属人化を解消する", description: "CRMを活用して営業の属人化を解消する方法を解説します。" },
  { slug: "crm-09", cat: "crm", title: "CRM導入から運用までの進め方", description: "CRMの導入から運用定着までの進め方を、ステップごとに解説します。" },
  { slug: "crm-10", cat: "crm", title: "CRMの保守運用を外部に任せるメリット", description: "CRMの保守運用を外部パートナーに任せるメリットを解説します。" },

  // ===== 事業承継 10 =====
  { slug: "succession-01", cat: "succession", title: "事業承継とは？基本と進め方をわかりやすく解説", description: "事業承継とは何か、基本と進め方を分かりやすく解説します。" },
  { slug: "succession-02", cat: "succession", title: "後継者がいない場合の事業承継の選択肢", description: "後継者がいない場合に取りうる事業承継の選択肢を解説します。" },
  { slug: "succession-03", cat: "succession", title: "事業承継とM&Aの違い", description: "事業承継とM&Aの違いを、分かりやすく整理して解説します。" },
  { slug: "succession-04", cat: "succession", title: "事業承継の進め方と必要な準備", description: "事業承継を円滑に進めるための手順と、必要な準備を解説します。" },
  { slug: "succession-05", cat: "succession", title: "従業員の雇用を守る事業承継のポイント", description: "従業員の雇用を守りながら事業承継を進めるためのポイントを解説します。" },
  { slug: "succession-06", cat: "succession", title: "事業承継を早めに相談すべき理由", description: "事業承継を早めに相談すべき理由と、準備期間の重要性を解説します。" },
  { slug: "succession-07", cat: "succession", title: "パチンコホールの事業承継の進め方", description: "パチンコホール運営企業の事業承継の進め方と注意点を解説します。" },
  { slug: "succession-08", cat: "succession", title: "親族内承継と第三者承継の違い", description: "親族内承継と第三者承継の違いを、利点と課題とともに解説します。" },
  { slug: "succession-09", cat: "succession", title: "事業承継における会社の価値の考え方", description: "事業承継における会社の価値（株価）の考え方を解説します。" },
  { slug: "succession-10", cat: "succession", title: "事業承継の相談先の選び方", description: "事業承継の相談先をどう選ぶか、選定のポイントを解説します。" },

  // ===== 不動産DX 10 =====
  { slug: "redx-01", cat: "realestate-dx", title: "不動産DXとは？業界の課題と解決策", description: "不動産DXとは何か、業界が抱える課題と解決策を解説します。" },
  { slug: "redx-02", cat: "realestate-dx", title: "不動産業の反響対応を効率化する方法", description: "不動産業における反響対応を効率化する具体的な方法を解説します。" },
  { slug: "redx-03", cat: "realestate-dx", title: "不動産仲介の追客を自動化するDX", description: "不動産仲介の追客業務を自動化し、属人化を解消するDXを解説します。" },
  { slug: "redx-04", cat: "realestate-dx", title: "不動産管理会社のCRM活用術", description: "不動産管理会社がCRMを活用して業務を効率化する方法を解説します。" },
  { slug: "redx-05", cat: "realestate-dx", title: "複数ポータルの問い合わせを一元管理する方法", description: "複数の不動産ポータルからの問い合わせを一元管理する方法を解説します。" },
  { slug: "redx-06", cat: "realestate-dx", title: "不動産業の属人化を解消するDX", description: "不動産業に多い属人化を、DXで解消する方法を解説します。" },
  { slug: "redx-07", cat: "realestate-dx", title: "不動産DXで成約率を上げる仕組みづくり", description: "不動産DXによって成約率を上げる仕組みづくりを解説します。" },
  { slug: "redx-08", cat: "realestate-dx", title: "賃貸管理業務を効率化するDXの進め方", description: "賃貸管理業務を効率化するためのDXの進め方を解説します。" },
  { slug: "redx-09", cat: "realestate-dx", title: "不動産業のデータ活用入門", description: "不動産業におけるデータ活用の基本と始め方を解説します。" },
  { slug: "redx-10", cat: "realestate-dx", title: "不動産DXの始め方と選ぶべきツール", description: "不動産DXの始め方と、選ぶべきツールの考え方を解説します。" },

  // ===== パチンコ業界の未来 10 =====
  { slug: "pachinko-01", cat: "pachinko", title: "パチンコ業界の現状と今後の展望", description: "パチンコ業界の現状と、これからの展望を分かりやすく解説します。" },
  { slug: "pachinko-02", cat: "pachinko", title: "パチンコホールのDX化はどこまで進むか", description: "パチンコホールのDX化の現状とこれからの可能性を解説します。" },
  { slug: "pachinko-03", cat: "pachinko", title: "パチンコ業界の事業承継問題と解決の方向性", description: "パチンコ業界が直面する事業承継問題と、解決の方向性を解説します。" },
  { slug: "pachinko-04", cat: "pachinko", title: "パチンコホールの業態変更という選択肢", description: "市場変化に向き合うパチンコホールの、業態変更という選択肢を解説します。" },
  { slug: "pachinko-05", cat: "pachinko", title: "データで読み解くパチンコ業界のトレンド", description: "データから読み解くパチンコ業界のトレンドと活用の視点を解説します。" },
  { slug: "pachinko-06", cat: "pachinko", title: "パチンコホールの人手不足とAI活用", description: "パチンコホールの人手不足に対し、AIをどう活かせるかを解説します。" },
  { slug: "pachinko-07", cat: "pachinko", title: "パチンコ店の業務効率化｜AIでできること", description: "パチンコ店の業務効率化に向けて、AIでできることを解説します。" },
  { slug: "pachinko-08", cat: "pachinko", title: "パチンコ業界の生き残り戦略", description: "変化の激しいパチンコ業界における、生き残り戦略を解説します。" },
  { slug: "pachinko-09", cat: "pachinko", title: "遊技場の新たな価値創造とは", description: "遊技場が取り組むべき、新たな価値創造の方向性を解説します。" },
  { slug: "pachinko-10", cat: "pachinko", title: "パチンコ業界とテクノロジーの未来", description: "パチンコ業界とテクノロジーが今後どう関わっていくのかを解説します。" },
];

type Frame = {
  hook: string;
  background: string[];
  solution: string[];
  serviceName: string;
  serviceSlug: string;
};

const FRAMES: Record<string, Frame> = {
  ai: {
    hook: "AIは大企業だけのものではなく、いまや中小企業の現場でも成果を生む実用的な道具になっています。",
    background: [
      "近年、生成AIの登場によってAI活用のハードルは大きく下がりました。これまで専門知識やまとまった投資が必要だった領域でも、文章での指示だけで実務に活かせるようになっています。一方で、ツールを契約しただけで「現場で使われ、成果につながる」状態まで到達できている企業は多くありません。導入が目的化し、せっかくの投資が形骸化してしまう例も少なくないのが実情です。",
      "背景にあるのは、テクノロジーそのものよりも「どの業務をどう変えれば成果が出るか」という設計の不在です。日報・集計、メール対応、資料作成といったアナログ業務が多く残る現場ほど、AIの効果は大きくなります。だからこそ、自社の業務を起点に活用を設計することが欠かせません。",
    ],
    solution: [
      "成果を出すための基本は、流行を追うのではなく成果から逆算することです。費用対効果と実装難易度の両面から優先順位を付け、効果の高い業務に絞って小さく始めます。そのうえで、誰が使っても同じ品質で再現できるよう手順を標準化（SOP化）し、現場が日常的に使える状態まで作り込むことが重要です。",
      "トラストリンクパートナーでは、業務の棚卸しから活用設計、ユースケースの実装、社内定着、運用改善までを一貫して伴走します。経営者一人でも回せる現実的な規模にこだわり、過剰な作り込みや新たな属人化を生まない形で、確実に成果を積み上げていきます。",
    ],
    serviceName: "AI導入支援",
    serviceSlug: "ai-support",
  },
  claude: {
    hook: "Claudeは、長文の理解や自然な日本語の文章生成に強く、ビジネスの実務に適したAIとして注目されています。",
    background: [
      "生成AIの選択肢が増えるなかで、どのAIをどう使うかは企業にとって重要な判断になっています。Anthropic社が開発するClaudeは、長文の読み込み・要約や、日本語の自然な文章生成、安全性への配慮に強みを持ち、メールや資料、議事録といった文章まわりの業務と相性が良いAIです。",
      "ただし、ツールの性能が高くても、現場で使われなければ成果にはつながりません。「使える人と使えない人の差が大きい」「業務に合った使い方が分からず雑談で終わる」といった声は多く、組織として活かしきれていないケースが目立ちます。",
    ],
    solution: [
      "活用の鍵は、現場の業務に合わせたテンプレートと、入力してよい情報を明確にした運用ルールを整えることです。目的・前提・出力形式を具体的に伝える指示をテンプレート化すれば、誰が使っても安定した品質が得られます。",
      "トラストリンクパートナーのClaude導入支援では、プラン選定や初期設定から、業務テンプレートの整備、安全な運用ルールづくり、社内定着までを一貫して支援します。技術に不慣れな方でも日常的に使える状態まで伴走します。",
    ],
    serviceName: "Claude導入支援",
    serviceSlug: "claude-support",
  },
  "claude-code": {
    hook: "Claude Codeは、コードの生成・修正だけでなく、ファイル操作やドキュメント作成、定型作業の自動化まで担える開発支援AIです。",
    background: [
      "Claude Codeはターミナル上で動作する開発支援AIで、エンジニアの生産性向上はもちろん、コードを書かない事務作業の自動化にも活用できます。小さな集計ツールやレポート生成、ドキュメント作成など、これまで外注や手作業に頼っていた領域を社内で完結できる可能性が広がっています。",
      "一方で、環境構築やCLI（コマンド操作）に不慣れで使い始められない、チームでの使い方が定まらず個人の試行錯誤で止まっている、といった導入の壁も存在します。最初の成功体験までたどり着けるかどうかが、活用の分かれ目になります。",
    ],
    solution: [
      "重要なのは、環境構築から最初の動作確認までを確実に乗り越え、現場の業務に合った使いどころを設計することです。再利用できる指示テンプレートと運用ルールを整えれば、チーム全体で安定した成果を得られます。",
      "トラストリンクパートナーのClaude Code導入支援では、OSに合わせたセットアップ、活用ユースケースの設計、チーム運用の整備、定着・改善までを一貫して伴走します。CLI未経験でも使い始められるようサポートします。",
    ],
    serviceName: "Claude Code導入支援",
    serviceSlug: "claude-code",
  },
  dx: {
    hook: "DXはシステムを導入することそのものではなく、業務や働き方を変え、成果を生み出すための取り組みです。",
    background: [
      "DX（デジタルトランスフォーメーション）という言葉は広く知られるようになりましたが、「何から始めればよいか分からない」「過去にシステムを入れたが現場で使われなかった」という悩みは依然として多く聞かれます。とくに専任のIT担当がいない中小企業では、推進の難しさが課題になりがちです。",
      "形骸化の多くは、現場不在のまま導入を進めてしまうことに原因があります。紙やエクセルに分散した情報、データを活かせていない意思決定など、現場に根ざした課題から出発しなければ、ツールは使われずに終わってしまいます。",
    ],
    solution: [
      "成功の鍵は、効果が高く着手しやすい領域から小さく始め、現場で使われる状態を作りながら全社へ広げていくことです。業務とデータの流れを可視化し、優先順位を付けて段階的に進めることで、過剰投資を避けながら成果を積み上げられます。",
      "トラストリンクパートナーのDX推進支援では、現状分析から構想策定、業務のデジタル化、情報の一元化、内製化までを伴走します。導入後も社内で改善を続けられる、持続可能な体制づくりを重視しています。",
    ],
    serviceName: "DX推進支援",
    serviceSlug: "dx-support",
  },
  crm: {
    hook: "CRM（顧客管理）は、分散した顧客情報を一元化し、対応の抜け漏れと属人化を解消するための仕組みです。",
    background: [
      "顧客情報がエクセルや個人のメールに分散していると、「誰がどこまで対応したか分からない」「担当者によって品質がばらつく」「引き継ぎが難しい」といった問題が生じがちです。これらは対応漏れや機会損失に直結します。",
      "CRMはこうした課題を解決する有効な手段ですが、種類が多く選定が難しいうえ、導入後の運用に乗らず形骸化してしまうケースも少なくありません。成果を左右するのは、導入そのものよりも定着と運用です。",
    ],
    solution: [
      "まずは業務要件に合わせて自社に合うCRMを中立的に選定し、現場に合わせた初期設定とデータ移行を行うことが大切です。そのうえで、対応状況を見える化し、運用ルールと操作ガイドを整えることで、チーム全員が同じ情報を共有できる状態をつくります。",
      "トラストリンクパートナーでは、CRMの選定・導入から保守運用、活用度向上までをワンストップで支援します。導入して終わりにせず、投資を確実に成果へつなげます。",
    ],
    serviceName: "クラウドシステム販売保守",
    serviceSlug: "cloud-system",
  },
  succession: {
    hook: "事業承継は、株式や資産の移転だけでなく、ノウハウ・取引・雇用を守りながら事業を次へつなぐ取り組みです。",
    background: [
      "後継者不在や経営環境の変化に直面し、事業の将来に不安を抱える経営者は少なくありません。とくに「誰に引き継げばよいか分からない」「従業員の雇用を守りたい」「業界の事情を理解した相手に相談したい」といった声は多く聞かれます。",
      "事業承継はデリケートで時間のかかるテーマです。準備が遅れるほど選択肢は狭まり、関係者への影響も大きくなります。だからこそ、相手が見えない段階からの早めの相談と、秘密保持の徹底が欠かせません。",
    ],
    solution: [
      "大切なのは、守りたい条件（雇用・取引）を明確にしたうえで、事業や従業員を引き継ぐ意欲のある相手を慎重に探すことです。条件のすり合わせから引き継ぎまで、双方が納得できる形を丁寧に作っていきます。",
      "トラストリンクパートナーは、パチンコ店運営企業をはじめとする業界の事業承継に強みを持ち、承継先のマッチングから引き継ぎまでを秘密厳守で伴走します。業界特有の規制・商習慣を踏まえた現実的な承継を支援します。",
    ],
    serviceName: "事業承継支援",
    serviceSlug: "business-succession",
  },
  "realestate-dx": {
    hook: "不動産業では、反響対応の遅れや情報の分散が、そのまま成約機会の損失につながります。",
    background: [
      "不動産業務は、ポータルサイトからの反響対応、顧客・物件情報の管理、追客、契約手続きなど、情報のやり取りが多く発生します。これらが個人のメールや紙、エクセルに分散していると、対応漏れや二重対応、追客の属人化が起きやすくなります。",
      "とくに複数のポータルを利用している場合、問い合わせの集約と初動対応のスピードが成果を大きく左右します。反響を取りこぼさない仕組みづくりが、競争力に直結する時代になっています。",
    ],
    solution: [
      "解決の基本は、反響を一元管理し、対応状況を見える化することです。担当割り当てや一次返信のテンプレート、追客のステップを仕組み化すれば、属人化を解消し、誰でも一定品質の対応ができるようになります。",
      "トラストリンクパートナーの不動産DX支援では、CRMの提供と問い合わせ管理の効率化を中心に、現場が無理なく使える形で導入し、成果につながる運用まで伴走します。",
    ],
    serviceName: "不動産DX支援",
    serviceSlug: "property-dx",
  },
  pachinko: {
    hook: "市場環境が大きく変化するなか、パチンコ業界は事業の効率化と新たな価値創造の両面で岐路に立っています。",
    background: [
      "パチンコ業界は、来店者数の変化や人手不足、規制環境など、さまざまな変化に直面しています。アナログな業務が多く残る一方で、データを活用した運営や業務効率化の余地は大きく、テクノロジーの活かし方が今後の競争力を左右します。",
      "同時に、後継者不在による事業承継や、立地・建物・人材を活かした業態変更といった、経営そのものに関わる選択も現実的なテーマになっています。変化を先送りせず、自社の資産を起点に次の一手を描くことが求められています。",
    ],
    solution: [
      "重要なのは、現状を客観的に把握し、効率化・承継・業態変更といった選択肢を整理したうえで、勝算のある方向性を見極めることです。日次レポートの自動化のような小さな効率化から、経営の大きな決断まで、現実的な順序で進めることが大切です。",
      "トラストリンクパートナーは、業界知識とテクノロジーを掛け合わせ、AI・DX支援、事業承継支援、業態変更支援を通じてパチンコ業界の変革に伴走します。現場に根ざした実践的な支援を行います。",
    ],
    serviceName: "AI・DX支援",
    serviceSlug: "ai-support",
  },
};

export type BlogSection = { heading: string; paragraphs: string[] };

export type BlogPost = {
  slug: string;
  categoryId: string;
  categoryLabel: string;
  title: string;
  description: string;
  published: string;
  updated: string;
  keywords: string[];
  readingMin: number;
  body: BlogSection[];
};

function dateForIndex(i: number): string {
  // 2024年1月から月4本ペースで割り当て（過去日付）。表示は新しい順にソート。
  const monthOffset = Math.floor(i / 4);
  const total = 2024 * 12 + monthOffset;
  const year = Math.floor(total / 12);
  const month = (total % 12) + 1;
  const day = [6, 13, 20, 27][i % 4];
  return `${year}-${String(month).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
}

function buildBody(t: Topic): BlogSection[] {
  const f = FRAMES[t.cat];
  return [
    {
      heading: "はじめに｜問題提起",
      paragraphs: [
        `「${t.title}」——本記事ではこのテーマについて、中小企業の現場で役立つ視点から整理します。${f.hook}`,
        "しかし実際には、必要性を感じながらも「何から手を付ければよいか分からない」「情報が多すぎて判断できない」「過去にうまくいかなかった」といった理由で、一歩を踏み出せていない企業が少なくありません。検討しているうちに時間だけが過ぎ、結果として変化を先送りしてしまう——そうしたケースは決して珍しくないのです。",
        `本記事では、なぜいまこのテーマが重要なのかという背景を整理したうえで、現実的な解決策と進め方をお伝えします。専門的な知識がなくても読み進められるよう、できるだけ平易にまとめていますので、「${t.title}」を自社で考えるきっかけとしてご活用ください。`,
      ],
    },
    {
      heading: "背景｜なぜいま重要なのか",
      paragraphs: [
        ...f.background,
        "言い換えれば、課題は「やるかやらないか」ではなく「どう進めるか」に移っています。先延ばしにするほど、本来削減できたはずのコストや、創出できたはずの時間が静かに積み重なっていきます。だからこそ、自社の状況に合わせた現実的な進め方を知ることが、最初の重要な一歩になります。",
      ],
    },
    {
      heading: "解決策｜どう進めればよいか",
      paragraphs: [
        ...f.solution,
        `「${t.title}」というテーマも、原則は同じです。自社の状況を起点に、効果の高い一点へ絞って小さく始め、検証しながら確実に成果を積み上げる。そして現場が自走できる状態を目指す——これが、遠回りのようでいて最も確実な道筋になります。`,
      ],
    },
    {
      heading: "押さえておきたい3つのポイント",
      paragraphs: [
        `最後に、「${t.title}」を進めるうえで押さえておきたい3つのポイントを整理します。`,
        "①目的を明確にする：手段（ツールや仕組み）を導入すること自体を目的にせず、「何の成果のために行うのか」を先に定めます。目的が曖昧なまま進めると、せっかくの取り組みが形骸化しがちです。",
        "②小さく始めて検証する：最初から大きく広げるのではなく、効果が見込める範囲に絞って試し、結果を確かめてから広げます。失敗のリスクを抑えながら、確実に前進できます。",
        "③現場とともに進める：実際に使うのは現場です。現場の声を起点に設計し、使われる状態（定着）まで作り込むことが、成果を左右します。",
      ],
    },
    {
      heading: "まとめ",
      paragraphs: [
        `ここまで「${t.title}」について、問題提起から背景、解決策、進め方のポイントまでを整理してきました。重要なのは、情報を増やすことではなく、自社にとって本当に成果につながる一点を見極め、着実に実行することです。`,
        `とはいえ、自社だけで最適な進め方を判断するのは簡単ではありません。トラストリンクパートナーは、業界知識とテクノロジーを掛け合わせ、${f.serviceName}をはじめとする伴走型の支援で企業の変革を支えています。現状の課題整理から最適なご提案まで、現場に寄り添ってサポートします。`,
        "「自社の場合はどう進めればよいか」を一緒に整理するところから始められます。小さな疑問でも構いませんので、ぜひお気軽にご相談ください。",
      ],
    },
  ];
}

function estimateMinutes(body: BlogSection[]): number {
  const chars = body.reduce(
    (sum, s) => sum + s.paragraphs.reduce((a, p) => a + p.length, 0),
    0
  );
  return Math.max(3, Math.round(chars / 500));
}

export const POSTS: BlogPost[] = TOPICS.map((t, i) => {
  const cat = BLOG_CATEGORIES.find((c) => c.id === t.cat)!;
  const published = dateForIndex(i);
  // 主要記事は独自フル本文を優先（無ければ自動生成本文）
  const body = CUSTOM_BODIES[t.slug] ?? buildBody(t);
  return {
    slug: t.slug,
    categoryId: t.cat,
    categoryLabel: cat.label,
    title: t.title,
    description: t.description,
    published,
    updated: published,
    keywords: [cat.label, "トラストリンクパートナー", FRAMES[t.cat].serviceName],
    readingMin: estimateMinutes(body),
    body,
  };
})
  // 新しい順に表示
  .sort((a, b) => (a.published < b.published ? 1 : -1));

export const POST_MAP: Record<string, BlogPost> = Object.fromEntries(
  POSTS.map((p) => [p.slug, p])
);

export function getPost(slug: string): BlogPost | undefined {
  return POST_MAP[slug];
}
