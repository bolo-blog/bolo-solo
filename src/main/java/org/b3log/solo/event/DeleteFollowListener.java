/*
 * Bolo - A stable and beautiful blogging system based in Solo.
 * Copyright (c) 2020-present, https://github.com/bolo-blog
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */
package org.b3log.solo.event;

import java.util.Map;

import org.b3log.latke.event.AbstractEventListener;
import org.b3log.latke.event.Event;
import org.b3log.latke.ioc.BeanManager;
import org.b3log.latke.ioc.Singleton;
import org.b3log.latke.logging.Level;
import org.b3log.latke.logging.Logger;
import org.b3log.solo.cache.FollowArticleCache;
import org.b3log.solo.model.Follow;
import org.json.JSONObject;

/**
 *
 * @author <a href="https://github.com/gakkiyomi">Gakkiyomi (Bolo Commiter)</a>
 * @since 0.0.1
 */
@Singleton
public class DeleteFollowListener extends AbstractEventListener<JSONObject> {

    /**
     * Logger.
     */
    private static final Logger LOGGER = Logger.getLogger(DeleteFollowListener.class);

    @Override
    public void action(final Event<JSONObject> event) {
        final JSONObject data = event.getData();
        final String followName = data.optString(Follow.FOLLOW_TITLE);
        LOGGER.log(Level.DEBUG, "Processing an event [type={0}, data={1}] in listener [className={2}]",
                event.getType(), data, DeleteFollowListener.class.getName());
        final BeanManager beanManager = BeanManager.getInstance();
        final FollowArticleCache followArticleCache = beanManager.getReference(FollowArticleCache.class);
        final Map<String, JSONObject> ret = followArticleCache.removeFollowArticles(followName);
        if (null == ret || ret.isEmpty()) {
            LOGGER.log(Level.WARN, "delete follow article cache: No follow articles found for follow [name={0}]",
                    followName);
            return;
        }
        LOGGER.log(Level.INFO,
                "delete follow article cache: Removed follow articles [followName={0}, articleCount={1}]",
                followName, ret.size());
    }

    /**
     * Gets the event type {@linkplain EventTypes#DELETE_FOLLOW}.
     *
     * @return event type
     */
    @Override
    public String getEventType() {
        return EventTypes.DELETE_FOLLOW;
    }
}
