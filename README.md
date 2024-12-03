# Opendata Bridge CMS

Opendata bridge のコンテンツ管理を行うシステム

## 🚀 Getting started

### `develop`

Start your Strapi application with autoReload enabled. [Learn more](https://docs.strapi.io/dev-docs/cli#strapi-develop)

```
npm run dev
```

### `start`

Start your Strapi application with autoReload disabled. [Learn more](https://docs.strapi.io/dev-docs/cli#strapi-start)

```
npm run start
```

### `build`

Build your admin panel. [Learn more](https://docs.strapi.io/dev-docs/cli#strapi-build)

```
npm run build
```

## 開発に参加するためには？

Opendata Bridge CMS の開発に興味を持っていただき、ありがとうございます。
より良いアプリケーションの実現のため、機能改善やバグ修正の参加を募集しています。

皆さんが開発に参加するために、一連の開発の流れの例を記載します。

### 事前知識

本プロジェクトは、GitHub flow に基づいて開発を行います。
[GitHub flow - GitHub Docs](https://docs.github.com/en/get-started/using-github/github-flow)

原則、main ブランチに向けて Pull Request を作成してください。
main ブランチにマージされたコードは、リリースのタイミングで main ブランチにマージされます。

main ブランチにマージされたコードは、CODEOWNERS によってリリースパッケージが作成された後に、本番環境にデプロイされます。

### 開発の流れ

#### 1. issue の作成

機能改善の要望やバグの報告があれば、まずは報告をお願いします。

#### 2. リポジトリのフォーク

GitHub のリポジトリページで本プロジェクトをフォークしてください。

#### 3. プロダクトコードの修正

作成した issue に関して、プロダクトコードに変更を加えましょう。

#### 4. 変更したコードの push

変更したコードを push しましょう。
ブランチ名は「feature/issue-{IssueID}」のような命名規則としてください。

#### 5. PR の作成

main ブランチに向けて PR を作成しましょう。CODEOWNERS のメンバーがレビューします。

#### 6. プルリクエストのレビュー

プルリクエストがレビューされ、問題がなければ本プロジェクトにマージされます。
CODEOWNERS から修正の指摘があった場合は、それに応じて変更を加えてください。

## Tips

Azureの環境変数を.envに保存するコマンド

```
pbpaste | jq '.[] | .name + "=" + .value' -r > .env
```
