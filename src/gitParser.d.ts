declare type ParsedData = {
    user: string;
    type: 'commit' | 'PR';
    URL: string;
    ID: string | number;
};
declare type Collaborator = {
    login: string;
    id: number;
    node_id: string;
    avatar_url: string;
    gravatar_id: string | null;
    url: string;
    html_url: string;
    followers_url: string;
    following_url: string;
    gists_url: string;
    starred_url: string;
    subscriptions_url: string;
    organizations_url: string;
    repos_url: string;
    events_url: string;
    received_events_url: string;
    type: string;
    site_admin: boolean;
    permissions?: undefined | {
        admin: boolean;
        push: boolean;
        pull: boolean;
    };
};
declare type Commit = {
    url: string;
    sha: string;
    node_id: string;
    html_url: string;
    comments_url: string;
    commit: any;
    author: any;
    committer: any;
    parents: any;
};
export default class GitParser {
    private readonly owner;
    private readonly repository;
    private readonly repo;
    private readonly octokit;
    constructor();
    private getAuthorizedOctokit;
    getCollaborators(): Promise<{
        login: string;
        id: number;
        node_id: string;
        avatar_url: string;
        gravatar_id: string | null;
        url: string;
        html_url: string;
        followers_url: string;
        following_url: string;
        gists_url: string;
        starred_url: string;
        subscriptions_url: string;
        organizations_url: string;
        repos_url: string;
        events_url: string;
        received_events_url: string;
        type: string;
        site_admin: boolean;
        permissions?: {
            pull: boolean;
            push: boolean;
            admin: boolean;
        } | undefined;
    }[]>;
    getPullReqs(): Promise<{
        url: string;
        repository_url: string;
        labels_url: string;
        comments_url: string;
        events_url: string;
        html_url: string;
        id: number;
        node_id: string;
        number: number;
        title: string;
        locked: boolean;
        active_lock_reason: string;
        assignees: {
            login: string;
            id: number;
            node_id: string;
            avatar_url: string;
            gravatar_id: string;
            url: string;
            html_url: string;
            followers_url: string;
            following_url: string;
            gists_url: string;
            starred_url: string;
            subscriptions_url: string;
            organizations_url: string;
            repos_url: string;
            events_url: string;
            received_events_url: string;
            type: string;
            site_admin: boolean;
            starred_at: string;
        }[];
        user: {
            login: string;
            id: number;
            node_id: string;
            avatar_url: string;
            gravatar_id: string;
            url: string;
            html_url: string;
            followers_url: string;
            following_url: string;
            gists_url: string;
            starred_url: string;
            subscriptions_url: string;
            organizations_url: string;
            repos_url: string;
            events_url: string;
            received_events_url: string;
            type: string;
            site_admin: boolean;
            starred_at: string;
        };
        labels: {
            id: number;
            node_id: string;
            url: string;
            name: string;
            color: string;
            default: boolean;
            description: string;
        }[];
        state: string;
        assignee: {
            login: string;
            id: number;
            node_id: string;
            avatar_url: string;
            gravatar_id: string;
            url: string;
            html_url: string;
            followers_url: string;
            following_url: string;
            gists_url: string;
            starred_url: string;
            subscriptions_url: string;
            organizations_url: string;
            repos_url: string;
            events_url: string;
            received_events_url: string;
            type: string;
            site_admin: boolean;
            starred_at: string;
        };
        milestone: {
            url: string;
            html_url: string;
            labels_url: string;
            id: number;
            node_id: string;
            number: number;
            state: "open" | "closed";
            title: string;
            description: string;
            creator: {
                login: string;
                id: number;
                node_id: string;
                avatar_url: string;
                gravatar_id: string;
                url: string;
                html_url: string;
                followers_url: string;
                following_url: string;
                gists_url: string;
                starred_url: string;
                subscriptions_url: string;
                organizations_url: string;
                repos_url: string;
                events_url: string;
                received_events_url: string;
                type: string;
                site_admin: boolean;
                starred_at: string;
            };
            open_issues: number;
            closed_issues: number;
            created_at: string;
            updated_at: string;
            closed_at: string;
            due_on: string;
        };
        comments: number;
        created_at: string;
        updated_at: string;
        closed_at: string;
        text_matches: {
            object_url: string;
            object_type: string;
            property: string;
            fragment: string;
            matches: {
                text: string;
                indices: number[];
            }[];
        }[];
        pull_request: {
            merged_at: string;
            diff_url: string;
            html_url: string;
            patch_url: string;
            url: string;
        };
        body: string;
        score: number;
        author_association: "COLLABORATOR" | "CONTRIBUTOR" | "FIRST_TIMER" | "FIRST_TIME_CONTRIBUTOR" | "MANNEQUIN" | "MEMBER" | "NONE" | "OWNER";
        draft: boolean;
        repository: {
            id: number;
            node_id: string;
            name: string;
            full_name: string;
            license: {
                key: string;
                name: string;
                url: string;
                spdx_id: string;
                node_id: string;
                html_url: string;
            };
            forks: number;
            permissions: {
                admin: boolean;
                pull: boolean;
                triage: boolean;
                push: boolean;
                maintain: boolean;
            };
            owner: {
                login: string;
                id: number;
                node_id: string;
                avatar_url: string;
                gravatar_id: string;
                url: string;
                html_url: string;
                followers_url: string;
                following_url: string;
                gists_url: string;
                starred_url: string;
                subscriptions_url: string;
                organizations_url: string;
                repos_url: string;
                events_url: string;
                received_events_url: string;
                type: string;
                site_admin: boolean;
                starred_at: string;
            };
            private: boolean;
            html_url: string;
            description: string;
            fork: boolean;
            url: string;
            archive_url: string;
            assignees_url: string;
            blobs_url: string;
            branches_url: string;
            collaborators_url: string;
            comments_url: string;
            commits_url: string;
            compare_url: string;
            contents_url: string;
            contributors_url: string;
            deployments_url: string;
            downloads_url: string;
            events_url: string;
            forks_url: string;
            git_commits_url: string;
            git_refs_url: string;
            git_tags_url: string;
            git_url: string;
            issue_comment_url: string;
            issue_events_url: string;
            issues_url: string;
            keys_url: string;
            labels_url: string;
            languages_url: string;
            merges_url: string;
            milestones_url: string;
            notifications_url: string;
            pulls_url: string;
            releases_url: string;
            ssh_url: string;
            stargazers_url: string;
            statuses_url: string;
            subscribers_url: string;
            subscription_url: string;
            tags_url: string;
            teams_url: string;
            trees_url: string;
            clone_url: string;
            mirror_url: string;
            hooks_url: string;
            svn_url: string;
            homepage: string;
            language: string;
            forks_count: number;
            stargazers_count: number;
            watchers_count: number;
            size: number;
            default_branch: string;
            open_issues_count: number;
            is_template: boolean;
            topics: string[];
            has_issues: boolean;
            has_projects: boolean;
            has_wiki: boolean;
            has_pages: boolean;
            has_downloads: boolean;
            archived: boolean;
            disabled: boolean;
            visibility: string;
            pushed_at: string;
            created_at: string;
            updated_at: string;
            allow_rebase_merge: boolean;
            template_repository: {
                id: number;
                node_id: string;
                name: string;
                full_name: string;
                owner: {
                    login: string;
                    id: number;
                    node_id: string;
                    avatar_url: string;
                    gravatar_id: string;
                    url: string;
                    html_url: string;
                    followers_url: string;
                    following_url: string;
                    gists_url: string;
                    starred_url: string;
                    subscriptions_url: string;
                    organizations_url: string;
                    repos_url: string;
                    events_url: string;
                    received_events_url: string;
                    type: string;
                    site_admin: boolean;
                };
                private: boolean;
                html_url: string;
                description: string;
                fork: boolean;
                url: string;
                archive_url: string;
                assignees_url: string;
                blobs_url: string;
                branches_url: string;
                collaborators_url: string;
                comments_url: string;
                commits_url: string;
                compare_url: string;
                contents_url: string;
                contributors_url: string;
                deployments_url: string;
                downloads_url: string;
                events_url: string;
                forks_url: string;
                git_commits_url: string;
                git_refs_url: string;
                git_tags_url: string;
                git_url: string;
                issue_comment_url: string;
                issue_events_url: string;
                issues_url: string;
                keys_url: string;
                labels_url: string;
                languages_url: string;
                merges_url: string;
                milestones_url: string;
                notifications_url: string;
                pulls_url: string;
                releases_url: string;
                ssh_url: string;
                stargazers_url: string;
                statuses_url: string;
                subscribers_url: string;
                subscription_url: string;
                tags_url: string;
                teams_url: string;
                trees_url: string;
                clone_url: string;
                mirror_url: string;
                hooks_url: string;
                svn_url: string;
                homepage: string;
                language: string;
                forks_count: number;
                stargazers_count: number;
                watchers_count: number;
                size: number;
                default_branch: string;
                open_issues_count: number;
                is_template: boolean;
                topics: string[];
                has_issues: boolean;
                has_projects: boolean;
                has_wiki: boolean;
                has_pages: boolean;
                has_downloads: boolean;
                archived: boolean;
                disabled: boolean;
                visibility: string;
                pushed_at: string;
                created_at: string;
                updated_at: string;
                permissions: {
                    admin: boolean;
                    push: boolean;
                    pull: boolean;
                };
                allow_rebase_merge: boolean;
                temp_clone_token: string;
                allow_squash_merge: boolean;
                delete_branch_on_merge: boolean;
                allow_merge_commit: boolean;
                subscribers_count: number;
                network_count: number;
            };
            temp_clone_token: string;
            allow_squash_merge: boolean;
            delete_branch_on_merge: boolean;
            allow_merge_commit: boolean;
            subscribers_count: number;
            network_count: number;
            open_issues: number;
            watchers: number;
            master_branch: string;
            starred_at: string;
        };
        body_html: string;
        body_text: string;
        timeline_url: string;
        performed_via_github_app: {
            [x: string]: any;
            id: number;
            slug: string;
            node_id: string;
            owner: {
                login: string;
                id: number;
                node_id: string;
                avatar_url: string;
                gravatar_id: string;
                url: string;
                html_url: string;
                followers_url: string;
                following_url: string;
                gists_url: string;
                starred_url: string;
                subscriptions_url: string;
                organizations_url: string;
                repos_url: string;
                events_url: string;
                received_events_url: string;
                type: string;
                site_admin: boolean;
                starred_at: string;
            };
            name: string;
            description: string;
            external_url: string;
            html_url: string;
            created_at: string;
            updated_at: string;
            permissions: {
                [x: string]: string;
                issues: string;
                checks: string;
                metadata: string;
                contents: string;
                deployments: string;
            };
            events: string[];
            installations_count: number;
            client_id: string;
            client_secret: string;
            webhook_secret: string;
            pem: string;
        };
    }[]>;
    getCollaboratorPullReqs(collaborator: Collaborator): Promise<{
        url: string;
        repository_url: string;
        labels_url: string;
        comments_url: string;
        events_url: string;
        html_url: string;
        id: number;
        node_id: string;
        number: number;
        title: string;
        locked: boolean;
        active_lock_reason: string;
        assignees: {
            login: string;
            id: number;
            node_id: string;
            avatar_url: string;
            gravatar_id: string;
            url: string;
            html_url: string;
            followers_url: string;
            following_url: string;
            gists_url: string;
            starred_url: string;
            subscriptions_url: string;
            organizations_url: string;
            repos_url: string;
            events_url: string;
            received_events_url: string;
            type: string;
            site_admin: boolean;
            starred_at: string;
        }[];
        user: {
            login: string;
            id: number;
            node_id: string;
            avatar_url: string;
            gravatar_id: string;
            url: string;
            html_url: string;
            followers_url: string;
            following_url: string;
            gists_url: string;
            starred_url: string;
            subscriptions_url: string;
            organizations_url: string;
            repos_url: string;
            events_url: string;
            received_events_url: string;
            type: string;
            site_admin: boolean;
            starred_at: string;
        };
        labels: {
            id: number;
            node_id: string;
            url: string;
            name: string;
            color: string;
            default: boolean;
            description: string;
        }[];
        state: string;
        assignee: {
            login: string;
            id: number;
            node_id: string;
            avatar_url: string;
            gravatar_id: string;
            url: string;
            html_url: string;
            followers_url: string;
            following_url: string;
            gists_url: string;
            starred_url: string;
            subscriptions_url: string;
            organizations_url: string;
            repos_url: string;
            events_url: string;
            received_events_url: string;
            type: string;
            site_admin: boolean;
            starred_at: string;
        };
        milestone: {
            url: string;
            html_url: string;
            labels_url: string;
            id: number;
            node_id: string;
            number: number;
            state: "open" | "closed";
            title: string;
            description: string;
            creator: {
                login: string;
                id: number;
                node_id: string;
                avatar_url: string;
                gravatar_id: string;
                url: string;
                html_url: string;
                followers_url: string;
                following_url: string;
                gists_url: string;
                starred_url: string;
                subscriptions_url: string;
                organizations_url: string;
                repos_url: string;
                events_url: string;
                received_events_url: string;
                type: string;
                site_admin: boolean;
                starred_at: string;
            };
            open_issues: number;
            closed_issues: number;
            created_at: string;
            updated_at: string;
            closed_at: string;
            due_on: string;
        };
        comments: number;
        created_at: string;
        updated_at: string;
        closed_at: string;
        text_matches: {
            object_url: string;
            object_type: string;
            property: string;
            fragment: string;
            matches: {
                text: string;
                indices: number[];
            }[];
        }[];
        pull_request: {
            merged_at: string;
            diff_url: string;
            html_url: string;
            patch_url: string;
            url: string;
        };
        body: string;
        score: number;
        author_association: "COLLABORATOR" | "CONTRIBUTOR" | "FIRST_TIMER" | "FIRST_TIME_CONTRIBUTOR" | "MANNEQUIN" | "MEMBER" | "NONE" | "OWNER";
        draft: boolean;
        repository: {
            id: number;
            node_id: string;
            name: string;
            full_name: string;
            license: {
                key: string;
                name: string;
                url: string;
                spdx_id: string;
                node_id: string;
                html_url: string;
            };
            forks: number;
            permissions: {
                admin: boolean;
                pull: boolean;
                triage: boolean;
                push: boolean;
                maintain: boolean;
            };
            owner: {
                login: string;
                id: number;
                node_id: string;
                avatar_url: string;
                gravatar_id: string;
                url: string;
                html_url: string;
                followers_url: string;
                following_url: string;
                gists_url: string;
                starred_url: string;
                subscriptions_url: string;
                organizations_url: string;
                repos_url: string;
                events_url: string;
                received_events_url: string;
                type: string;
                site_admin: boolean;
                starred_at: string;
            };
            private: boolean;
            html_url: string;
            description: string;
            fork: boolean;
            url: string;
            archive_url: string;
            assignees_url: string;
            blobs_url: string;
            branches_url: string;
            collaborators_url: string;
            comments_url: string;
            commits_url: string;
            compare_url: string;
            contents_url: string;
            contributors_url: string;
            deployments_url: string;
            downloads_url: string;
            events_url: string;
            forks_url: string;
            git_commits_url: string;
            git_refs_url: string;
            git_tags_url: string;
            git_url: string;
            issue_comment_url: string;
            issue_events_url: string;
            issues_url: string;
            keys_url: string;
            labels_url: string;
            languages_url: string;
            merges_url: string;
            milestones_url: string;
            notifications_url: string;
            pulls_url: string;
            releases_url: string;
            ssh_url: string;
            stargazers_url: string;
            statuses_url: string;
            subscribers_url: string;
            subscription_url: string;
            tags_url: string;
            teams_url: string;
            trees_url: string;
            clone_url: string;
            mirror_url: string;
            hooks_url: string;
            svn_url: string;
            homepage: string;
            language: string;
            forks_count: number;
            stargazers_count: number;
            watchers_count: number;
            size: number;
            default_branch: string;
            open_issues_count: number;
            is_template: boolean;
            topics: string[];
            has_issues: boolean;
            has_projects: boolean;
            has_wiki: boolean;
            has_pages: boolean;
            has_downloads: boolean;
            archived: boolean;
            disabled: boolean;
            visibility: string;
            pushed_at: string;
            created_at: string;
            updated_at: string;
            allow_rebase_merge: boolean;
            template_repository: {
                id: number;
                node_id: string;
                name: string;
                full_name: string;
                owner: {
                    login: string;
                    id: number;
                    node_id: string;
                    avatar_url: string;
                    gravatar_id: string;
                    url: string;
                    html_url: string;
                    followers_url: string;
                    following_url: string;
                    gists_url: string;
                    starred_url: string;
                    subscriptions_url: string;
                    organizations_url: string;
                    repos_url: string;
                    events_url: string;
                    received_events_url: string;
                    type: string;
                    site_admin: boolean;
                };
                private: boolean;
                html_url: string;
                description: string;
                fork: boolean;
                url: string;
                archive_url: string;
                assignees_url: string;
                blobs_url: string;
                branches_url: string;
                collaborators_url: string;
                comments_url: string;
                commits_url: string;
                compare_url: string;
                contents_url: string;
                contributors_url: string;
                deployments_url: string;
                downloads_url: string;
                events_url: string;
                forks_url: string;
                git_commits_url: string;
                git_refs_url: string;
                git_tags_url: string;
                git_url: string;
                issue_comment_url: string;
                issue_events_url: string;
                issues_url: string;
                keys_url: string;
                labels_url: string;
                languages_url: string;
                merges_url: string;
                milestones_url: string;
                notifications_url: string;
                pulls_url: string;
                releases_url: string;
                ssh_url: string;
                stargazers_url: string;
                statuses_url: string;
                subscribers_url: string;
                subscription_url: string;
                tags_url: string;
                teams_url: string;
                trees_url: string;
                clone_url: string;
                mirror_url: string;
                hooks_url: string;
                svn_url: string;
                homepage: string;
                language: string;
                forks_count: number;
                stargazers_count: number;
                watchers_count: number;
                size: number;
                default_branch: string;
                open_issues_count: number;
                is_template: boolean;
                topics: string[];
                has_issues: boolean;
                has_projects: boolean;
                has_wiki: boolean;
                has_pages: boolean;
                has_downloads: boolean;
                archived: boolean;
                disabled: boolean;
                visibility: string;
                pushed_at: string;
                created_at: string;
                updated_at: string;
                permissions: {
                    admin: boolean;
                    push: boolean;
                    pull: boolean;
                };
                allow_rebase_merge: boolean;
                temp_clone_token: string;
                allow_squash_merge: boolean;
                delete_branch_on_merge: boolean;
                allow_merge_commit: boolean;
                subscribers_count: number;
                network_count: number;
            };
            temp_clone_token: string;
            allow_squash_merge: boolean;
            delete_branch_on_merge: boolean;
            allow_merge_commit: boolean;
            subscribers_count: number;
            network_count: number;
            open_issues: number;
            watchers: number;
            master_branch: string;
            starred_at: string;
        };
        body_html: string;
        body_text: string;
        timeline_url: string;
        performed_via_github_app: {
            [x: string]: any;
            id: number;
            slug: string;
            node_id: string;
            owner: {
                login: string;
                id: number;
                node_id: string;
                avatar_url: string;
                gravatar_id: string;
                url: string;
                html_url: string;
                followers_url: string;
                following_url: string;
                gists_url: string;
                starred_url: string;
                subscriptions_url: string;
                organizations_url: string;
                repos_url: string;
                events_url: string;
                received_events_url: string;
                type: string;
                site_admin: boolean;
                starred_at: string;
            };
            name: string;
            description: string;
            external_url: string;
            html_url: string;
            created_at: string;
            updated_at: string;
            permissions: {
                [x: string]: string;
                issues: string;
                checks: string;
                metadata: string;
                contents: string;
                deployments: string;
            };
            events: string[];
            installations_count: number;
            client_id: string;
            client_secret: string;
            webhook_secret: string;
            pem: string;
        };
    }[]>;
    getPullReqData(collaborators: Array<Collaborator>): Promise<ParsedData[]>;
    getBranchNames(): Promise<string[]>;
    getBranchCommits(branchName: string): Promise<{
        url: string;
        sha: string;
        node_id: string;
        html_url: string;
        comments_url: string;
        commit: {
            url: string;
            author: {
                name?: string | undefined;
                email?: string | undefined;
                date?: string | undefined;
            } | null;
            committer: {
                name?: string | undefined;
                email?: string | undefined;
                date?: string | undefined;
            } | null;
            message: string;
            comment_count: number;
            tree: {
                sha: string;
                url: string;
            };
            verification?: {
                verified: boolean;
                reason: string;
                payload: string | null;
                signature: string | null;
            } | undefined;
        };
        author: {
            login: string;
            id: number;
            node_id: string;
            avatar_url: string;
            gravatar_id: string | null;
            url: string;
            html_url: string;
            followers_url: string;
            following_url: string;
            gists_url: string;
            starred_url: string;
            subscriptions_url: string;
            organizations_url: string;
            repos_url: string;
            events_url: string;
            received_events_url: string;
            type: string;
            site_admin: boolean;
            starred_at?: string | undefined;
        } | null;
        committer: {
            login: string;
            id: number;
            node_id: string;
            avatar_url: string;
            gravatar_id: string | null;
            url: string;
            html_url: string;
            followers_url: string;
            following_url: string;
            gists_url: string;
            starred_url: string;
            subscriptions_url: string;
            organizations_url: string;
            repos_url: string;
            events_url: string;
            received_events_url: string;
            type: string;
            site_admin: boolean;
            starred_at?: string | undefined;
        } | null;
        parents: {
            sha: string;
            url: string;
            html_url?: string | undefined;
        }[];
        stats?: {
            additions?: number | undefined;
            deletions?: number | undefined;
            total?: number | undefined;
        } | undefined;
        files?: {
            filename?: string | undefined;
            additions?: number | undefined;
            deletions?: number | undefined;
            changes?: number | undefined;
            status?: string | undefined;
            raw_url?: string | undefined;
            blob_url?: string | undefined;
            patch?: string | undefined;
            sha?: string | undefined;
            contents_url?: string | undefined;
            previous_filename?: string | undefined;
        }[] | undefined;
    }[]>;
    getAllCommits(): Promise<Commit[]>;
    getCommitData(collaborators: Array<Collaborator>): Promise<ParsedData[]>;
    getParsedData(): Promise<ParsedData[]>;
}
export {};