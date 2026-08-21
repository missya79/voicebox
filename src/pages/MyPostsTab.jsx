import { useEffect, useState } from 'react';
import MyPostCard from '../components/MyPostCard';
import ConfirmDialog from '../components/ConfirmDialog';
import { supabase } from '../lib/supabaseClient';
import { formatDate } from '../lib/formatDate';
import { useAuth } from '../context/AuthContext';
import styles from './MyPostsTab.module.css';

function MyPostsTab() {
  const { user } = useAuth();
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [deleteTarget, setDeleteTarget] = useState(null);

  useEffect(() => {
    let ignore = false;

    async function fetchPosts() {
      setLoading(true);
      const { data, error } = await supabase
        .from('opinions')
        .select('*')
        .eq('user_id', user.id)
        .order('created_at', { ascending: false });

      if (ignore) return;
      if (!error) {
        setPosts(
          data.map((row) => ({
            id: row.id,
            title: row.title,
            status: row.status,
            category: row.category,
            photo: row.photo_url,
            date: formatDate(row.created_at),
          }))
        );
      }
      setLoading(false);
    }

    fetchPosts();
    return () => {
      ignore = true;
    };
  }, [user.id]);

  const handleDelete = async () => {
    const id = deleteTarget;
    setDeleteTarget(null);
    const { error } = await supabase.from('opinions').delete().eq('id', id);
    if (!error) {
      setPosts((prev) => prev.filter((post) => post.id !== id));
    }
  };

  if (loading) return <p className={styles.empty}>불러오는 중이에요...</p>;
  if (posts.length === 0) return <p className={styles.empty}>아직 작성한 의견이 없어요.</p>;

  return (
    <>
      <div className={styles.grid}>
        {posts.map((post) => (
          <MyPostCard key={post.id} post={post} onDelete={setDeleteTarget} />
        ))}
      </div>

      <ConfirmDialog
        open={Boolean(deleteTarget)}
        title="이 의견을 삭제할까요?"
        description="삭제하면 되돌릴 수 없어요."
        confirmLabel="삭제하기"
        cancelLabel="취소"
        onConfirm={handleDelete}
        onCancel={() => setDeleteTarget(null)}
      />
    </>
  );
}

export default MyPostsTab;
